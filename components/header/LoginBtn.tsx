import { FaUserCircle } from 'react-icons/fa';
import styled from 'styled-components';

const LoginBtn = () => {
  return (
    <LoginBtnContainer className="flex-center">
      <FaUserCircle size={20} />
      <Text>로그인</Text>
    </LoginBtnContainer>
  );
};

const LoginBtnContainer = styled.div`
  width: 100px;
  height: 35px;
  border: 1px solid white;
  border-radius: 17.5px;
  cursor: pointer;
`;

const Text = styled.p`
  margin-left: 10px;
`;

export default LoginBtn;
