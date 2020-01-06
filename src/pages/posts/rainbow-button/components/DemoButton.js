import React from 'react';
import styled from 'styled-components';

import { BREAKPOINTS } from '@constants';
import { normalize } from '@utils';

import NewsletterSignup from '@components/NewsletterSignup';
import MagicRainbowButton from '@components/MagicRainbowButton';
import Center from '@components/Center';

const MIN = 0;
const MAX = 10;

const DemoButton = () => {
  return (
    <Wrapper>
      <WrappedButton>Subscribe</WrappedButton>
    </Wrapper>
  );
};

const Wrapper = styled(Center)`
  margin-bottom: 32px;
  margin-top: var(margin-bottom);
`;

const WrappedButton = styled(MagicRainbowButton)`
  width: 150px;
  height: 60px;
  font-size: 21px;
  border-radius: 5px;
  margin-left: 16px;

  @media ${BREAKPOINTS.sm} {
    margin-top: 16px;
    margin-left: 0;
    width: 100%;
  }
`;

export default DemoButton;
