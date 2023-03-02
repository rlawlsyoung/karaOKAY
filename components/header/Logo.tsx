import { IoMdMicrophone } from 'react-icons/io';
import styled from 'styled-components';

const Logo = () => {
  return (
    <LogoContainer className="flex-center">
      <IoMdMicrophone size={30} />
      KaraOKAY
    </LogoContainer>
  );
};

const LogoContainer = styled.h1`
  font-family: 'Press Start 2P';
  font-size: 24px;

  svg {
    margin-right: 6px;
  }
`;

export default Logo;
