import { IoMdMicrophone } from 'react-icons/io';
import styled from 'styled-components';

const Logo = () => {
  return (
    <LogoContainer>
      <IoMdMicrophone size={30} />
      KaraOKAY
    </LogoContainer>
  );
};

const LogoContainer = styled.h1`
  font-family: 'Press Start 2P';

  svg {
    margin-right: 10px;
  }
`;

export default Logo;
