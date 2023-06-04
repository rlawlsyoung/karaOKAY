import { IoPeopleCircle } from 'react-icons/io5';
import styled from 'styled-components';

import { responsive } from '@/styles/theme';

const LoginBtn = () => {
  return (
    <LoginBtnContainer className="flex-center" onClick={() => alert(123)}>
      <IoPeopleCircle />
      <Text>로그인</Text>
    </LoginBtnContainer>
  );
};

const LoginBtnContainer = styled.div`
  position: absolute;
  right: 25px;
  width: 100px;
  height: 40px;
  border: 1px solid white;
  border-radius: 20px;
  background-color: white;
  color: black;
  font-weight: 700;
  cursor: pointer;

  svg {
    font-size: 24px;
  }

  @media ${responsive.mobile} {
    right: 15px;
    width: 70px;
    height: 35px;
    border: none;

    svg {
      font-size: 20px;
    }
  }
`;

const Text = styled.p`
  margin-left: 7.5px;
  @media ${responsive.mobile} {
    margin-left: 2px;
    font-size: 12px;
  }
`;

export default LoginBtn;
