import React, { useRef, useState } from "react";
import styled from "styled-components";
import ChangeLetterCheckModal from "components/Modal-Components/ChangeLetterCheckModal";
import Button from "components/Button";

function ChangeLetterModal({
  letterCheck,
  letterList,
  setChangeLetterModalOpen,
}) {
  const [checkModal, setCheckModal] = useState(false);
  const [content, setContent] = useState(letterCheck.content);
  const checkBtnRef = useRef();

  const letterChangeEvent = (event) => {
    setContent(event.target.value);
  };

  const [checkContent, setCheckContent] = useState();

  const checkModalOnBtn = (content, boolean) => {
    setCheckContent(content);
    checkBtnRef.current = boolean;
    setCheckModal(true);
  };

  return (
    <>
      <ModalBackground>
        <ChangeLetter>
          <ChangeTitle>내용 수정하기</ChangeTitle>
          <UserName>이름 : {letterCheck.nickname}</UserName>
          <ChangeInputLetter
            type="textarea"
            value={content}
            onChange={letterChangeEvent}
          />
          <ChangeLetterBtnDiv>
            <Button
              content={"완료"}
              type="click"
              onClick={() => checkModalOnBtn("수정하시겠습니까?", true)}
            />

            <Button
              content={"취소"}
              type="click"
              onClick={() => checkModalOnBtn("취소하시겠습니까?", false)}
            />
          </ChangeLetterBtnDiv>
        </ChangeLetter>
      </ModalBackground>
      {checkModal && (
        <ChangeLetterCheckModal
          letterCheck={letterCheck}
          checkContent={checkContent}
          setCheckModal={setCheckModal}
          content={content}
          letterList={letterList}
          setChangeLetterModalOpen={setChangeLetterModalOpen}
          checkBtnRef={checkBtnRef.current}
        />
      )}
    </>
  );
}

export default ChangeLetterModal;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.8);
`;

const ChangeLetter = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  width: 40vh;
  min-height: 30vh;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
  margin: 10px;
  display: ${(props) => props.display};
  background-color: rgb(112, 119, 161, 0.8);
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ChangeTitle = styled.h2`
  display: flex;
  justify-content: center;
  height: 30px;
`;

const UserName = styled.label`
  text-align: center;
  margin: 5px;
  font-size: 18px;
`;

const ChangeInputLetter = styled.textarea`
  border-width: 0px;
  border: 1px solid black;
  border-radius: 10px;
  width: 96%;
  min-height: 20vh;
  height: auto;
  margin: 0px auto 10px auto;
  padding: 5px;
`;

const ChangeLetterBtnDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
