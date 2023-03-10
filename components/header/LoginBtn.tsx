import { FaUserCircle } from 'react-icons/fa';
import styled from 'styled-components';

import { responsive } from '@/styles/theme';

const LoginBtn = () => {
  return (
    <LoginBtnContainer className="flex-center" onClick={() => alert(123)}>
      <FaUserCircle />
      <Text>로그인</Text>
    </LoginBtnContainer>
  );
};

const LoginBtnContainer = styled.div`
  position: absolute;
  right: 25px;
  width: 100px;
  height: 35px;
  border: 1px solid white;
  border-radius: 17.5px;
  cursor: pointer;

  svg {
    font-size: 20px;
  }

  @media ${responsive.mobile} {
    right: 15px;
    width: 30px;
    border: none;

    svg {
      font-size: 27.5px;
    }
  }
`;

const Text = styled.p`
  margin-left: 10px;
  @media ${responsive.mobile} {
    display: none;
  }
`;

export default LoginBtn;
