import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import basicAvatar from "assets/image/basicavatar.jpg";

function Header() {
  const { user } = useSelector((state) => state.user);

  return (
    <HeaderMain>
      <LinkStyle to={"/"}>
        <GroupCheckTitle>아티스트 팬레터</GroupCheckTitle>
      </LinkStyle>
      <UserProfile to={"/userProfile"}>
        <p>{user.nickname}</p>
        <UserProfileImage
          src={user.avatar ? user.avatar : basicAvatar}
          alt="유저 프로필 이미지 입니다."
        />
      </UserProfile>
    </HeaderMain>
  );
}

export default Header;

const HeaderMain = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1% 1%;
  padding: 1%;
  border-radius: 12px;
  background-color: rgb(66, 71, 105, 0.7);
  width: 98%;
  height: 60px;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
`;

const GroupCheckTitle = styled.h1`
  font-size: large;
  font-weight: bold;
`;

const UserProfile = styled(Link)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 30%;
  height: 100%;
  color: black;
  text-decoration: none;
`;

const UserProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
