import { signup } from "api/fetchJWT";
import Button from "components/Button";
import useInput from "hooks/useInput";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Signup() {
  const navigate = useNavigate();
  const [nickname, onChangeNicknameHandler] = useInput();
  const [id, onChangeIdHandler] = useInput();
  const [password, onChangePasswordHandler] = useInput();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      id,
      password,
      nickname,
    };
    try {
      await signup(newUser);
    } catch (error) {
      console.error(error);
      alert(error.response.data.message);
    }
    navigate("/login");
  };
  return (
    <SingupMain>
      <SignupContainer onSubmit={onSubmitHandler}>
        <h1>회원가입</h1>
        <SignupInput>
          <Input
            type="text"
            placeholder="이름"
            value={nickname}
            onChange={onChangeNicknameHandler}
          />
          <Input
            type="text"
            placeholder="아이디"
            value={id}
            onChange={onChangeIdHandler}
          />
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={onChangePasswordHandler}
          />
        </SignupInput>
        <div>
          <Button type="submit" content={"회원가입"} width={"80"} />
          <Button
            type="click"
            content={"로그인 페이지로"}
            width={"150"}
            onClick={() => navigate("/login")}
          />
        </div>
      </SignupContainer>
    </SingupMain>
  );
}

export default Signup;

const SingupMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const SignupContainer = styled.form`
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

const SignupInput = styled.div`
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
