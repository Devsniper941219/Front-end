import React from 'react';
import { NextSeo } from 'next-seo';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Content } from '../src/components/layout/Content';
import { CoinsWeMineSection } from '../src/pages/Home/components/CoinsWeMine/CoinsWeMine.section';
import { GetStartedSection } from '../src/pages/Home/components/GetStarted/GetStarted.section';
import { NewsSection } from '../src/pages/Home/components/News/News.section';
import { SearchAddressBar } from '../src/components/SearchAddressBar/SearchAddressBar';
import { Spacer } from '../src/components/layout/Spacer';
import { CoinEarnings } from '../src/pages/Home/components/CoinEarnings/CoinEarnings';
import { WhyFlexpool } from '../src/pages/Home/components/WhyFlexpool/WhyFlexpool';
import {
  Hero,
  SearchWrapper,
  PageContainer,
} from '../src/pages/Home/components';

import { poolCoinsFullGet } from '../src/rdx/poolCoinsFull/poolCoinsFull.actions';

export const HomePage = () => {
  const d = useDispatch();
  const { t } = useTranslation('home');

  React.useEffect(() => {
    d(poolCoinsFullGet());
    // useEffect only needs to fire on page load
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageContainer>
      <NextSeo title={'The Most Advanced Mining Pool'} />

      <Hero>
        <Content contentCenter style={{ position: 'relative', zIndex: 100 }}>
          <h1>{t('title')}</h1>
          <p>{t('description')}</p>
          <SearchWrapper>
            <SearchAddressBar />
          </SearchWrapper>
        </Content>
        <Spacer />
        <CoinEarnings />
        <Spacer />
        <NewsSection />
      </Hero>

      <CoinsWeMineSection />
      <WhyFlexpool />
      <GetStartedSection />
    </PageContainer>
  );
};

export default HomePage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'home',
        'cookie-consent',
      ])),
    },
  };
}
