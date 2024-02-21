import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Button from "components/Button";
import useInput from "hooks/useInput";
import { __initialization, __updateProfile } from "../../redux/modules/user";
import {
  __initializationLetterList,
  __updateLetterList,
} from "../../redux/modules/letters";

function EditProfile({ setChangeCheck }) {
  const { user } = useSelector((state) => state.user);
  const { letterList } = useSelector((state) => state.letters);
  const hiddenFileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);
  const [changeName, onChangeName] = useInput(user.nickname);
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    dispatch(__initializationLetterList());
  }, []);

  const ImageChangeClick = () => {
    hiddenFileInputRef.current.click();
  };

  const ImageHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    let fileRead = new FileReader();
    fileRead.onload = function () {
      setPreviewImg(fileRead.result);
    };
    fileRead.readAsDataURL(e.target.files[0]);
  };
  const formData = new FormData();

  const letterNameChange = () => {
    letterList.map((e) => {
      if (e.userId === user.id) {
        const newLetter = { ...e, nickname: changeName };
        return dispatch(__updateLetterList(newLetter));
      }
      return e;
    });
  };

  const profileChangeEvent = () => {
    if (selectedFile) {
      formData.append("avatar", selectedFile);
    }
    if (changeName) {
      formData.append("nickname", changeName);
    }
    dispatch(__updateProfile(formData));
    letterNameChange();
    setChangeCheck(false);
    dispatch(__initialization(accessToken));
  };

  const cancleEvent = () => {
    setChangeCheck(false);
  };
  return (
    <Main>
      <UserProfileBox>
        <div>
          <div onClick={ImageChangeClick}>
            {!previewImg ? (
              <ProfileImage src={user.avatar} />
            ) : (
              <ProfileImage src={previewImg} />
            )}
            <ImageInput
              type="file"
              accept="image/*"
              ref={hiddenFileInputRef}
              onChange={ImageHandler}
            />
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="변경할 이름을 입력해 주세요"
            value={changeName}
            onChange={onChangeName}
          />
        </div>
        {selectedFile || changeName !== user.nickname ? (
          <Button
            content={"변경하기"}
            width={"150"}
            onClick={profileChangeEvent}
          />
        ) : (
          false
        )}
        <Button content={"취소하기"} width={"100"} onClick={cancleEvent} />
      </UserProfileBox>
    </Main>
  );
}

export default EditProfile;

const Main = styled.main`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserProfileBox = styled.div`
  background-color: rgb(112, 119, 161, 0.5);
  border-radius: 8px;
  width: 50%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
`;

const ImageInput = styled.input`
  display: none;
`;
