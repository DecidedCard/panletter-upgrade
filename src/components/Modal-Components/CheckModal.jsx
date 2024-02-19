import styled from "styled-components";
import Button from "components/Button";

function CheckModal({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ModalBackground>
      <ModalStyle>
        <ModalContent>이름과 내용을 입력해주시기 바랍니다.</ModalContent>
        <Button
          content={"확인"}
          backgroundColor={"#7077a1"}
          onClick={closeModal}
          width={"50"}
          marginLeft={"125"}
        />
      </ModalStyle>
    </ModalBackground>
  );
}
export default CheckModal;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.8);
`;

const ModalStyle = styled.div`
  width: 300px;
  height: 200px;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f6b17a;
  border: 1px solid black;
  border-radius: 8px;
`;

const ModalContent = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
`;
