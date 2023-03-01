import styled from 'styled-components';

import Logo from './Logo';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: blue;
  font-size: 24px;
`;

export default Header;
