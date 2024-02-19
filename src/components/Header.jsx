import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { data } from "shared/data";
import Button from "components/Button";

function Header() {
  return (
    <header>
      <HeadTitle>아티스트 팬레터</HeadTitle>
      <Section>
        {data.map((i) => {
          return (
            <h2 key={i.id}>
              <Link to={`letter/${i.id}`} style={{ textDecoration: "none" }}>
                <Button
                  content={i.artist}
                  backgroundColor={"rgb(112, 119, 161, 0.7)"}
                  width={"auto"}
                />
              </Link>
            </h2>
          );
        })}
      </Section>
    </header>
  );
}

export default Header;

const HeadTitle = styled.h1`
  background-color: rgb(66, 71, 105, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: 50px;
  font-size: large;
  font-weight: bold;
  margin: 5px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 30px;
`;
