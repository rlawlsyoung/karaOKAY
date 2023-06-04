import styled from 'styled-components';

import { blurredDeepGray, middleGray, responsive } from '@/styles/theme';

const AuthForm = () => {
  return (
    <StyledAuthForm className="flex-center">
      <Title>로그인</Title>
    </StyledAuthForm>
  );
};

const StyledAuthForm = styled.form`
  width: 600px;
  height: calc(100vh - 120px);
  box-shadow: 0px 0px 7.5px 7.5px ${blurredDeepGray};
  background-color: ${blurredDeepGray};
  color: ${middleGray};
`;

const Title = styled.p`
  color: white;
  font-size: 26px;
  font-weight: 600;
`;

export default AuthForm;
