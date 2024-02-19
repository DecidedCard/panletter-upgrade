import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import basicAvatar from "assets/image/basicavatar.jpg";
import CheckModal from "components/Modal-Components/CheckModal";
import Button from "components/Button";
import { v4 as uuidv4 } from "uuid";
import { addLetterList } from "../redux/modules/letters";
import { getFormattedDate } from "util/date";

function InputForm({ foundData, foundArtist }) {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const [artist, setArtist] = useState(foundArtist[0].name);

  // 등록 버튼
  const addBtn = (event) => {
    event.preventDefault();
    const nameCheck = event.target.name.value;
    const letterCheck = event.target.letter.value;
    if (!nameCheck || !letterCheck) {
      setModalOpen(true);
      return;
    }
    const newLetter = {
      id: uuidv4(),
      createDate: getFormattedDate(new Date()),
      title: foundData.artist,
      name: nameCheck,
      avatar: basicAvatar,
      letter: letterCheck,
      artist,
    };
    dispatch(addLetterList(newLetter));
    event.target.reset();
    event.target.name.focus();
  };

  // selector에서 고른 아티스트 이름으로 저장
  const handleSelect = (e) => {
    setArtist(e.target.value);
  };

  return (
    <SectionStyle>
      <InputFormStyle onSubmit={addBtn}>
        <div>
          <label>이름:</label>
          <InputName
            type="text"
            placeholder="최대 20글자까지 작성할 수 있습니다."
            maxLength={20}
            autoFocus
            name="name"
          />
        </div>
        <InputLetterDiv>
          <label>내용:</label>
          <InputLetter
            type="text"
            placeholder="최대 100글자까지 작성할 수 있습니다."
            maxLength={100}
            name="letter"
          />
        </InputLetterDiv>
        <InputSelectorDiv>
          <label>어떤 분한테 보내고 싶나요?</label>
          <InputSelector onChange={handleSelect} value={artist}>
            {foundArtist.map((i) => {
              return (
                <option value={i.name} key={i.artistId}>
                  {i.name}
                </option>
              );
            })}
          </InputSelector>
          <Button
            content={"보내기"}
            backgroundColor={"#f6b17a"}
            height={"25"}
            type="submit"
          />
        </InputSelectorDiv>
      </InputFormStyle>
      {modalOpen && <CheckModal setModalOpen={setModalOpen} />}
    </SectionStyle>
  );
}

export default InputForm;

const SectionStyle = styled.section`
  height: 200px;
  width: 400px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  background-color: rgb(112, 119, 161, 0.8);
`;

const InputFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  margin: 5px;
`;

const InputName = styled.input`
  border-radius: 5px;
  border: none;
  width: 300px;
  height: 30px;
  margin-left: 30px;
  background-color: rgb(112, 119, 161, 0.7);
`;

const InputLetterDiv = styled.div`
  display: flex;
`;

const InputLetter = styled.textarea`
  border-radius: 5px;
  border: none;
  width: 300px;
  margin-left: 30px;
  height: 50px;
  background-color: rgb(112, 119, 161, 0.7);
  resize: none;
`;

const InputSelectorDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;

const InputSelector = styled.select`
  background-color: rgb(112, 119, 161, 0.7);
  border-radius: 5px;
  cursor: pointer;
`;
