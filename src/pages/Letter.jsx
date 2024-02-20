import Button from "components/Button";
import InputForm from "components/InputForm";
import LetterList from "components/LetterList";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { __initialization } from "../redux/modules/user";
import { data, artistData } from "shared/data";
import styled from "styled-components";
import Header from "components/Header";

function Letter() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(__initialization());
  }, []);

  const foundData = data.find((i) => {
    return i.id === parseInt(params.id);
  });

  const foundArtist = artistData.filter((i) => {
    return i.GroupId === foundData.id;
  });

  const [checkArtist, setCheckArtist] = useState(foundArtist[0].name);
  const [artistList, setArtistList] = useState(foundArtist);
  const [backgroundImage, setBackgroundImage] = useState(
    artistList[0].backgroundImage
  );

  if (error) {
    return navigate("/login");
  }

  // 이름을 클릭했을 때 backgroundColor를 변경
  const artistClick = (item) => {
    setCheckArtist(item.name);
    const newColor = artistList.map((e) => {
      if (e.GroupId === item.GroupId && e.artistId === item.artistId) {
        setBackgroundImage(e.backgroundImage);
        return { ...e, backgroundColor: "#F6B17A" };
      } else {
        return { ...e, backgroundColor: "#7077A1" };
      }
    });
    setArtistList(newColor);
  };

  return (
    <Main $backgroundImage={backgroundImage}>
      <Header />
      <GroupName>{foundData.artist}</GroupName>
      <Artist>
        {artistList.map((e) => {
          return (
            <Button
              content={e.name}
              backgroundColor={`${e.backgroundColor}`}
              key={e.artistId}
              onClick={() => artistClick(e)}
              height={"25"}
            />
          );
        })}
      </Artist>
      <InputForm foundData={foundData} foundArtist={foundArtist} />
      <LetterList foundData={foundData} checkArtist={checkArtist} />
    </Main>
  );
}

export default Letter;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 700px;
  height: auto;
  background-image: url("${(props) => props.$backgroundImage}");
  background-size: contain;
`;

const GroupName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 50px;
  margin: 5px;
  background-color: rgb(112, 119, 161, 0.7);
  border-radius: 8px;
  font-size: 30px;
`;

const Artist = styled.section`
  display: flex;
  min-width: 50%;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  height: 40px;
  margin: 5px;
  background-color: rgb(112, 119, 161, 0.6);
  padding: 5px;
`;
