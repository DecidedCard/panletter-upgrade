import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { getFormattedDate } from "util/date";

function LetterList({ foundData, checkArtist }) {
  const letterList = useSelector((state) => state.letters.letterList);

  const filteredLetterList = letterList.filter(
    (i) => i.title === foundData.artist && i.artist === checkArtist
  );
  return (
    <>
      <ListTitle>LetterList</ListTitle>
      <section>
        {filteredLetterList.length === 0 ? (
          <PanLetter>
            <LetterName>{checkArtist}의 팬레터가 아직 없습니다.</LetterName>
          </PanLetter>
        ) : (
          filteredLetterList.map((i) => {
            return (
              <Link
                key={i.id}
                to={`../detail/${i.id}`}
                style={{ textDecoration: "none" }}
              >
                <PanLetter>
                  <LetterAvatar src={i.avatar} alt="" />
                  <LetterName>{i.nickname}</LetterName>
                  <LetterContent>{i.content}</LetterContent>
                  <label>{i.createdAt}</label>
                </PanLetter>
              </Link>
            );
          })
        )}
      </section>
    </>
  );
}

export default LetterList;

const PanLetter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid black;
  border-radius: 12px;
  margin: 5px;
  padding: 5px;
  width: 500px;
  min-height: 100px;
  height: auto;
  color: black;
  background-color: rgb(112, 119, 161, 0.7);
  & label {
    margin-left: auto;
  }
`;

const ListTitle = styled.h2`
  font-size: 20px;
  margin: 10px;
`;

const LetterAvatar = styled.img`
  border-radius: 50%;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px auto 5px auto;
`;

const LetterName = styled.p`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  border-radius: 8px;
  min-width: 20%;
  width: auto;
  margin: 0px auto 0px auto;
  padding: 5px;
`;

const LetterContent = styled.p`
  border: 1px solid black;
  border-radius: 12px;
  min-height: 40px;
  height: auto;
  width: 90%;
  padding: 5px;
  margin: 1rem;
  padding: 10px 5px 0px 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
