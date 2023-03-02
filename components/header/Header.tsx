import styled from 'styled-components';

import Logo from './Logo';

const Header = () => {
  return (
    <HeaderContainer>
      a
      <Logo />s
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 100vw;
  color: white;
`;

export default Header;
