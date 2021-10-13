import React from 'react';
import styled from 'styled-components';
import Wrapper from '@common/Wrapper';

import logo from '@src/static/logo_white.svg';

const FooterWrapper = styled.footer`
  width: 100vw;
  padding: 20px;
  background: ${p =>
    p.theme.dark ? p.theme.secondaryColor : p.theme.gradient};

  p {
    font-size: 1rem;
    line-height: 35px;
    color: #8fb592;
  }

  a {
    color: ${p =>
      p.theme.dark ? p.theme.primaryColor : '#8fb592'};
    &:hover {
      color: ${p => p.theme.primaryText};
    }
  }
`;

const Footer = () => (
  <FooterWrapper>
    <Wrapper>
      <img width="35px" src={logo} alt="anurag hazra" />
      <p style={{ float: 'right' }}>
        Made with love by
        <a href="https://www.linkedin.com/in/catherine-burns-540b51194/" target="__blank">
          &nbsp;CATHERINE BURNS!
        </a>
      </p>
    </Wrapper>
  </FooterWrapper>
);

export default Footer;
