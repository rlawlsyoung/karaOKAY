import styled from 'styled-components';

import Logo from './Logo';
import LoginBtn from './LoginBtn';

import { lightGray } from '@/styles/theme';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <LoginBtn />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 70px;
  width: 100vw;
  border-bottom: 1px solid ${lightGray};
  background-color: black;
  color: white;
  z-index: 1;
`;

export default Header;
