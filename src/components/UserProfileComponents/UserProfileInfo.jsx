import Button from "components/Button";
import { useSelector } from "react-redux";
import styled from "styled-components";
import basicAvatar from "assets/image/basicavatar.jpg";

function UserProfileInfo({ setChangeCheck }) {
  const { user } = useSelector((state) => state.user);

  const onClickHandler = () => {
    setChangeCheck(true);
  };
  return (
    <Main>
      <UserProfileBox>
        <div>
          <ProfileImage src={user.avatar ? user.avatar : basicAvatar} />
        </div>
        <div>
          <label>{user.nickname}</label>
        </div>
        <Button
          content={"프로필 변경하기"}
          width={"150"}
          onClick={onClickHandler}
        />
      </UserProfileBox>
    </Main>
  );
}

export default UserProfileInfo;

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
`;
