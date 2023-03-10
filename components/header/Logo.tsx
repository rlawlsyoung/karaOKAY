import { IoMdMicrophone } from 'react-icons/io';
import styled from 'styled-components';

import { responsive } from '@/styles/theme';

const Logo = () => {
  return (
    <LogoContainer className="flex-center">
      <IoMdMicrophone />
      KaraOKAY
    </LogoContainer>
  );
};

const LogoContainer = styled.h1`
  font-family: 'Press Start 2P';
  font-size: 24px;

  svg {
    margin-right: 6px;
    font-size: 30px;
  }

  @media ${responsive.mobile} {
    font-size: 20px;
    svg {
      font-size: 24px;
    }
  }
`;

export default Logo;
