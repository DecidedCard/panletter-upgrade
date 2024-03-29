import React, { useEffect } from "react";
import Button from "components/Button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useInput from "hooks/useInput";
import { login } from "api/fetchJWT";
import { useSelector } from "react-redux";

function Login() {
  const navigate = useNavigate();
  const [id, onChangeIdHandler] = useInput();
  const [password, onChangePasswordHandler] = useInput();
  const { error } = useSelector((state) => state.user);

  useEffect(() => {
    if (error && localStorage.getItem("accessToken")) {
      alert("토큰 인증이 만료 되었습니다.");
    }
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const checkUser = {
      id,
      password,
    };
    try {
      const { data } = await login(checkUser);
      localStorage.setItem("accessToken", data.accessToken);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert(error.response.data.message);
    }
  };

  return (
    <LoginMain>
      <LoginContainer onSubmit={onSubmitHandler}>
        <h1>로그인</h1>
        <LoginInput>
          <Input
            type="text"
            placeholder="아이디를 입력해 주세요"
            value={id}
            onChange={onChangeIdHandler}
          />
          <Input
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            value={password}
            onChange={onChangePasswordHandler}
          />
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
  );
}

export default Login;

const LoginMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

const LoginContainer = styled.form`
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
