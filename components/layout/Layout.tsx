import React from 'react';
import styled from 'styled-components';

import { responsive } from '@/styles/theme';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <LayoutContainer className="flex-center">
      <LayoutInner>{props.children}</LayoutInner>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: url('/images/karaoke.jpg') no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
`;

const LayoutInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 1080px;
  height: calc(100vh - 70px);
  color: white;

  @media ${responsive.desktop} {
    width: 90vw;
  }
`;

export default Layout;
