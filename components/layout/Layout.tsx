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
`;

export default Layout;
