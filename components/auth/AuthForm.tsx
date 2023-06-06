import { useState } from 'react';
import styled from 'styled-components';

import { blurredDeepGray, middleGray, responsive } from '@/styles/theme';

const AuthForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignInChange = () => setIsSignIn(!isSignIn);

  return (
    <StyledAuthForm>
      <Title>{isSignIn ? '로그인' : '회원가입'}</Title>
      <Wrapper>
        <Text>이메일</Text>
        <Input placeholder="이메일을 입력해주세요." />
      </Wrapper>
      <Wrapper>
        <Text>비밀번호</Text>
        <Input placeholder="비밀번호는 7글자 이상 입력해주세요." />
      </Wrapper>
      <SignUp>
        {isSignIn ? '아이디가 없다면?' : '이미 아이디가 있다면?'}
        <p onClick={handleSignInChange}>{isSignIn ? '로그인' : '회원가입'}</p>
      </SignUp>

      <Button>{isSignIn ? '로그인' : '회원가입'}</Button>
    </StyledAuthForm>
  );
};

const StyledAuthForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 600px;
  height: calc(100vh - 128px);
  padding: 60px;
  box-shadow: 0px 0px 7.5px 7.5px ${blurredDeepGray};
  background-color: ${blurredDeepGray};
  color: ${middleGray};
`;

const Title = styled.p`
  color: white;
  font-size: 26px;
  font-weight: 600;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 50px;
  width: 100%;
`;

const Text = styled.p`
  display: flex;
  align-items: center;
  width: 90px;
`;

const Input = styled.input`
  width: calc(100%);
  margin: 0 15px;
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid ${middleGray};
  outline: none;
  background-color: transparent;
  color: ${middleGray};
  font-family: 'Pretendard';
  font-size: 18px;

  @media ${responsive.desktop} {
  }
`;

const SignUp = styled.p`
  display: flex;
  margin: 50px 0;

  p {
    margin-left: 5px;
    border-bottom: 1px solid ${middleGray};
    cursor: pointer;
  }
`;

const Button = styled.button``;

export default AuthForm;
