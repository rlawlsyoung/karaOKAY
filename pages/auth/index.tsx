import styled from 'styled-components';

import AuthForm from '@/components/auth/AuthForm';

const AuthPage = () => {
  return (
    <StyledAuthPage>
      <AuthForm />
    </StyledAuthPage>
  );
};

const StyledAuthPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
  font-size: 18px;
`;

export default AuthPage;
