import React from "react";
import styled from "styled-components";

function Button({
  type,
  content,
  backgroundColor,
  onClick,
  height,
  width,
  marginLeft,
}) {
  return (
    <MainButton
      type={type}
      $backgroundColor={backgroundColor}
      $height={height}
      $width={width}
      $marginLeft={marginLeft}
      onClick={onClick}
    >
      {content}
    </MainButton>
  );
}

export default Button;

const MainButton = styled.button`
  border: none;
  border-radius: 8px;
  font-size: 15px;
  color: black;
  height: ${(props) => (props.$height ? `${props.$height}px` : "30px")};
  width: ${(props) => (props.$width ? `${props.$width}px` : "60px")};
  margin: 5px;
  margin-left: ${(props) =>
    props.$marginLeft ? `${props.$marginLeft}px` : "0px"};
  background-color: ${(props) =>
    props.$backgroundColor ? `${props.$backgroundColor}` : "#424769"};
  cursor: pointer;
`;
