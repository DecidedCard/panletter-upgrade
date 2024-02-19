import styled from "styled-components";
import { useDispatch } from "react-redux";
import Button from "components/Button";
import { updateLetterList } from "../../redux/modules/letters";

function ChangeLetterCheckModal({
  checkContent,
  setCheckModal,
  name,
  content,
  setLetter,
  letter,
  letterList,
  setChangeLetterModalOpen,
  checkBtnRef,
}) {
  const dispatch = useDispatch();

  const rerender = () => {
    const newLetterList = letterList.map((i) => {
      if (i.id === letter.id) {
        return { ...i, name, letter: content };
      }
      return { ...i };
    });
    dispatch(updateLetterList(newLetterList));
  };

  const onClickHandler = (check) => {
    if (checkBtnRef === true && check === true) {
      if (name === "" || content === "") {
        alert("내용을 입력해주세요");
        return;
      }
      const newLetter = { ...letter, name: name, letter: content };
      setLetter({ ...newLetter });
      rerender();
      setChangeLetterModalOpen(false);
      setCheckModal(false);
    } else if (checkBtnRef === false && check === true) {
      setChangeLetterModalOpen(false);
      setCheckModal(false);
    }
    setCheckModal(false);
  };
  return (
    <ModalBackground>
      <CheckModal>
        <div>{checkContent}</div>
        <ChangeLetterBtn>
          <Button content={"확인"} onClick={() => onClickHandler(true)} />
          <Button content={"취소"} onClick={() => onClickHandler(false)} />
        </ChangeLetterBtn>
      </CheckModal>
    </ModalBackground>
  );
}

export default ChangeLetterCheckModal;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.8);
`;

const CheckModal = styled.div`
  width: 200px;
  height: 100px;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(112, 119, 161, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const ChangeLetterBtn = styled.div`
  display: flex;
  gap: 10px;
`;
