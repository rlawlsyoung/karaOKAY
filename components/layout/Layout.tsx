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

const LayoutContainer = styled.div``;

const LayoutInner = styled.div`
  width: 80vw;
  height: calc(100vh - 50px);
  color: white;
`;

export default Layout;
