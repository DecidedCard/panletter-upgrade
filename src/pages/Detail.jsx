import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import ChangeLetterModal from "components/Modal-Components/ChangeLetterModal";
import Button from "components/Button";
import DeleteCheckModal from "components/Modal-Components/DeleteCheckModal";
import { getFormattedDate } from "util/date";

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

function Detail() {
  // 모달창 조건에 따라 생겼다 사라졌다 하는 state
  const [changeLetterModalOpen, setChangeLetterModalOpen] = useState(false);
  const [deleteCheckModalOpen, setDeleteCheckModalOpen] = useState(false);

  const letterList = useSelector((state) => state.letters.letterList);
  const params = useParams();
  const navigate = useNavigate();

  // 상세페이지에 띄울 letter check
  const letterCheck = letterList.filter((i) => {
    return params.id === i.id;
  });

  const [letter, setLetter] = useState(letterCheck[0]);

  // 이전페이지로 이동하기 위한 함수
  function goBack() {
    return navigate(-1);
  }

  const deleteCheckModalBtn = () => {
    setDeleteCheckModalOpen(true);
  };

  const modalOpenBTN = () => {
    setChangeLetterModalOpen(true);
  };

  return (
    <>
      <MainStyle>
        <PageMove>
          <Button content={"이전페이지"} onClick={goBack} width={"90"} />
          <Button content={"HOME"} onClick={() => navigate("/")} />
        </PageMove>
        <main>
          <p>당신의 팬레터</p>
          <LetterDetail>
            <div>
              <LetterAvatar src={letter.avatar} alt="" />
              <LetterName>{letter.name}</LetterName>
              <LetterContent>{letter.letter}</LetterContent>
            </div>
            <LetterBtn>
              <label>{getFormattedDate(letter.createDate)}</label>
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
            </LetterBtn>
          </LetterDetail>
          {changeLetterModalOpen && (
            <ChangeLetterModal
              letter={letter}
              setLetter={setLetter}
              letterList={letterList}
              setChangeLetterModalOpen={setChangeLetterModalOpen}
            />
          )}
          {deleteCheckModalOpen && (
            <DeleteCheckModal
              setDeleteCheckModalOpen={setDeleteCheckModalOpen}
              goBack={goBack}
              letterList={letterList}
              letter={letter}
            />
          )}
        </main>
      </MainStyle>
    </>
  );
}

export default Detail;
