import React from "react";
import Button from "components/Button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <LoginMain>
        <LoginContainer>
          <h1>로그인</h1>
          <LoginInput>
            <Input type="text" placeholder="아이디를 입력해 주세요" />
            <Input type="password" placeholder="비밀번호를 입력해 주세요" />
          </LoginInput>
          <div>
            <Button type="submit" content={"로그인"} />
            <Button
              type="click"
              content={"회원가입"}
              width={"80"}
              onClick={() => navigate("/signup")}
            />
          </div>
        </LoginContainer>
      </LoginMain>
    </div>
  );
}

export default Login;

const LoginMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

const LoginContainer = styled.div`
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

const LoginInput = styled.div`
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
