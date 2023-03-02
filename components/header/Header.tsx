import styled from 'styled-components';

import Logo from './Logo';
import LoginBtn from './LoginBtn';

const Header = () => {
  return (
    <HeaderContainer>
      a
      <Logo />
      <LoginBtn />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  width: calc(100vw - 100px);
  padding: 0 50px;
  color: white;
`;

export default Header;
