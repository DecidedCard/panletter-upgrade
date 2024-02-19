import Button from "components/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function SignUp() {
  const navigate = useNavigate();
  return (
    <SingUpMain>
      <SignUpContainer>
        <h1>회원가입</h1>
        <SignUpInput>
          <Input type="text" placeholder="이름" />
          <Input type="text" placeholder="아이디" />
          <Input type="password" placeholder="비밀번호" />
        </SignUpInput>
        <div>
          <Button content={"회원가입"} width={"80"} />
          <Button
            content={"로그인 페이지로"}
            width={"150"}
            onClick={() => navigate("/login")}
          />
        </div>
      </SignUpContainer>
    </SingUpMain>
  );
}

export default SignUp;

const SingUpMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 50vh;
  height: 50%;
  background-color: rgba(45, 50, 80, 0.3);
  border-radius: 8px;
`;

const SignUpInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
  width: 100%;
  height: 75%;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  height: 20%;
  background-color: rgba(45, 50, 80, 0.2);
  border-bottom: 1px solid whitesmoke;
`;
