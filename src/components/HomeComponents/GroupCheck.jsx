import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { data } from "shared/data";
import Button from "components/Button";

function GroupCheck() {
  return (
    <section>
      <Group>
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
      </Group>
    </section>
  );
}

export default GroupCheck;

const Group = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 30px;
`;
