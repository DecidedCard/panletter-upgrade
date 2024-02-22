import React from "react";
import styled from "styled-components";
import Button from "components/Button";
import { useDispatch } from "react-redux";
import { __deleteLetter } from "../../redux/modules/letterSlice";

function DeleteCheckModal({
  setDeleteCheckModalOpen,
  goBack,
  letterList,
  letterCheck,
}) {
  const dispatch = useDispatch();
  const checkBtn = (boolean, id) => {
    if (boolean) {
      goBack();
      dispatch(__deleteLetter(id));
      setDeleteCheckModalOpen(false);
    }
    setDeleteCheckModalOpen(false);
  };
  return (
    <ModalBackground>
      <ModalStyle>
        <p>삭제하시겠습니까?</p>
        <BtnDiv>
          <Button
            content={"확인"}
            onClick={() => checkBtn(true, letterCheck.id)}
          />
          <Button content={"취소"} onClick={() => checkBtn(false)} />
        </BtnDiv>
      </ModalStyle>
    </ModalBackground>
  );
}

export default DeleteCheckModal;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.8);
`;

const ModalStyle = styled.div`
  width: 200px;
  height: 150px;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f6b17a;
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const BtnDiv = styled.div`
  display: flex;
  gap: 20px;
`;
