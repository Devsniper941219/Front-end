import { Helmet } from 'react-helmet-async';
import { Content } from 'src/components/layout/Content';
import { Page } from 'src/components/layout/Page';

import { HeaderStat } from 'src/components/layout/StatHeader';
import { TopDonatorsSection } from './TopDonors.section';
import { TopMinersSection } from './TopMiners.section';

export const MinersPage = () => {
  return (
    <Page>
      <Helmet>
        <title>Miners</title>
      </Helmet>
      <HeaderStat>
        <h1>Miners leaderboard</h1>
      </HeaderStat>
      <Content padding>
        <TopMinersSection />
        <TopDonatorsSection />
      </Content>
    </Page>
  );
};
