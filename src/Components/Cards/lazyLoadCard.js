import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import data from "./lazyLoadData.json";
import { Text } from "../../Layout/AltText";

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #166edc;
  @media screen and (max-width: 550px) {
      width: 100%;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 278px;
  padding: 2rem 1.5rem;
  border-radius: 3rem;
  background: #fff;
  overflow: scroll;
  box-shadow: 0 0 0 10px ${rgba("#000", 0.05)};
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 550px) {
      width: 278px;
      height: 256px;
  }
`;

const User = styled.div`
  height: 20px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  border-radius: 3rem;
  &:hover {
      background: ${rgba("#c4c4c4", 0.20)}
  }
`;

const Avatar = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 900;
`;

const Name = styled.div`
  font-weight: 900;
  font-size: 18px;
`;

const LazyLoadCard = () => {
    return(
        <Wrapper>
        <Card>
            {data.map(collection => (
                <User>
                    <Avatar style={{ background: collection.color }}>{collection.name.substr(0, 2)}</Avatar>
                    <Name>{collection.name}</Name>
                </User>
            ))}
        </Card>
        <Text isDark>LazyLoad Card</Text>
        </Wrapper>
    );
}

export default LazyLoadCard;