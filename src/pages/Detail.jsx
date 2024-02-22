import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import ChangeLetterModal from "components/Modal-Components/ChangeLetterModal";
import Button from "components/Button";
import DeleteCheckModal from "components/Modal-Components/DeleteCheckModal";
import { __initialization } from "../redux/modules/userSlice";
import { __initializationLetterList } from "../redux/modules/letterSlice";
import Header from "components/Header";

function Detail() {
  // 모달창 조건에 따라 생겼다 사라졌다 하는 state
  const [changeLetterModalOpen, setChangeLetterModalOpen] = useState(false);
  const [deleteCheckModalOpen, setDeleteCheckModalOpen] = useState(false);
  const { error, user } = useSelector((state) => state.user);
  const { isLetterLoading, letterList } = useSelector((state) => state.letters);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const check = localStorage.getItem("accessToken");

  useEffect(() => {
    dispatch(__initialization(check));
    dispatch(__initializationLetterList());
  }, []);

  // 상세페이지에 띄울 letter check
  const letterCheck = letterList.find((i) => {
    return params.id === i.id;
  });

  // 이전페이지로 이동하기 위한 함수
  const goBack = () => {
    return navigate(-1);
  };

  const deleteCheckModalBtn = () => {
    setDeleteCheckModalOpen(true);
  };

  const modalOpenBTN = () => {
    setChangeLetterModalOpen(true);
  };

  if (isLetterLoading) {
    return <div>로딩 중입니다.</div>;
  }

  if (error) {
    return navigate("/login");
  }

  return (
    <>
      <MainStyle>
        <Header />
        <main>
          <p>당신의 팬레터</p>
          <LetterDetail>
            <div>
              <LetterAvatar
                src={
                  letterCheck?.avatar
                    ? letterCheck.avatar
                    : "data:image/jpeg;base64,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"
                }
                alt=""
              />
              <LetterName>{letterCheck?.nickname}</LetterName>
              <LetterContent>{letterCheck?.content}</LetterContent>
            </div>
            <LetterBtn>
              <label>{letterCheck?.createdAt}</label>
              {user.id === letterCheck?.userId ? (
                <>
                  <Button
                    content={"삭제하기"}
                    onClick={() => deleteCheckModalBtn()}
                    backgroundColor={"#F6B17A"}
                    width={"80"}
                  />
                  <Button
                    content={"수정하기"}
                    onClick={modalOpenBTN}
                    width={"80"}
                  />
                </>
              ) : (
                false
              )}
            </LetterBtn>
          </LetterDetail>
          {changeLetterModalOpen && (
            <ChangeLetterModal
              letterCheck={letterCheck}
              letterList={letterList}
              setChangeLetterModalOpen={setChangeLetterModalOpen}
            />
          )}
          {deleteCheckModalOpen && (
            <DeleteCheckModal
              letterCheck={letterCheck}
              setDeleteCheckModalOpen={setDeleteCheckModalOpen}
              goBack={goBack}
              letterList={letterList}
            />
          )}
        </main>
      </MainStyle>
    </>
  );
}

export default Detail;

const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 100px;
  align-items: center;
  width: 100vw;
  min-height: 90vh;
  height: auto;
`;

const PageMove = styled.div`
  display: flex;
  flex-direction: row;
  gap: 400px;
  align-items: center;
  height: 40px;
  border: 1px solid black;
  margin: 5px;
  padding: 10px;
  background-color: rgb(112, 119, 161, 0.8);
`;

const LetterDetail = styled.section`
  border: 1px solid black;
  border-radius: 8px;
  width: 42vh;
  min-height: 30vh;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
  margin: 10px;
  background-color: rgb(112, 119, 161, 0.8);
`;

const LetterAvatar = styled.img`
  border-radius: 50%;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px auto 5px auto;
`;

const LetterName = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  min-height: 30px;
  height: auto;
  width: auto;
  margin: 0px auto 10px auto;
`;

const LetterContent = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  min-height: 20vh;
  height: auto;
  margin-bottom: 10px;
  padding: 5px;
`;

const LetterBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-top: auto;
  & label {
    white-space: nowrap;
    margin-top: auto;
  }
`;
