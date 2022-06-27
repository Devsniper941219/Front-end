import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import AnnouncementBar from '@/components/AnnouncementBar';
import { FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';

const StyledAnnouncementBar = styled(AnnouncementBar)`
  position: relative;
  z-index: 0;
  background-color: #151519;
  text-align: left;
  position: relative;
  min-height: 203px;
  overflow: hidden;
  border-bottom: 1px solid var(--border-color);

  & > div {
    height: 100%;
  }

  @media (max-width: 648px) {
    padding-bottom: 60px;
  }
`;

const IllustrationContainer = styled.div`
  position: absolute;
  left: 500px;
  top: -30px;
  height: 100%;
  width: 615px;
  text-align: center;
  z-index: -1;

  @media (max-width: 648px) {
    left: -58px;
    top: auto;
    bottom: -70%;
  }
`;

const Content = styled.div`
  display: inline-block;
  padding: 10px 0 18px;
`;

const CTA = styled.a`
  color: white;
  padding: 8px 16px;
  margin-left: -16px;
  display: inline-flex;
  align-items: center;

  svg {
    position: relative;
    left: 0;
    transition: left 0.2s linear;
  }

  &:hover {
    text-decoration: none;
    color: #0069ff;
    svg {
      color: #0069ff;
      left: 3px;
    }
  }

  transition: color 0.1s linear;
`;

const LearnMoreButton = styled.button`
  display: block;
  all: unset;
  color: white;
  background-color: #28282e;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: auto;
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: -0.015em;
  color: white;
  margin-top: 12px;
`;

const FlexFarmerAnnouncement = () => {
  return (
    <StyledAnnouncementBar id="flex-farmer-ad">
      <Content>
        <Image
          width={150}
          height={28}
          priority={true}
          src="/images/flexfarmer-logo.png"
          alt="FlexFarmer logo"
        />
        <Description>
          Tired of wasting time on node sync? <br />
          Want a more reliable and efficient farming solution?
          <br />
          How about a farmer with virtually no system requirements?
          <br />
          <br />
          <Link href="https://farmer.flexpool.io" passHref>
            <CTA>
              Learn more about FlexFarmer <FiChevronRight />
            </CTA>
          </Link>
        </Description>
      </Content>

      <IllustrationContainer>
        <Image
          width={643.2}
          height={307.2}
          priority={true}
          src="/images/flexfarmer-screenshot.webp"
          alt="FlexFarmer screenshot"
        />
      </IllustrationContainer>
    </StyledAnnouncementBar>
  );
};

export default FlexFarmerAnnouncement;
