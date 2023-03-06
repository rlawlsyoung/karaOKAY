import React from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <LayoutContainer className="flex-center">
      <LayoutInner> {props.children}</LayoutInner>
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
  width: 1080px;
  height: calc(100vh - 70px);
  color: white;
`;

export default Layout;
