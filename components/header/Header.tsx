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
  box-shadow: 0 4px 2px -2px ${lightGray};
  color: white;
`;

export default Header;
