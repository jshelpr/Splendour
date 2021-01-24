import React from "react";
import styled, { css } from "styled-components";

const Graphic = css`
  content: "";
  position: absolute;
  height: 200px;
  width: 200px;
  background: linear-gradient(45deg, #166edc, #199);
  border-radius: 50%;
  z-index: 0;
`;

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #199, #119);
  @media screen and (max-width: 550px) {
      width: 100vw;
  }
  &::before {
      ${Graphic}
      top: 150px;
      left: 100px;
  }
  &::after {
      ${Graphic}
      bottom: 150px;
      right: 100px;
      background: linear-gradient(90deg, #166edc, #199);
  }
`;

const Card = styled.div`
  height: 300px;
  width: 450px;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border: 0.3px solid #fff;
  z-index: 1;
  @media screen and (max-width: 550px) {
      width: 350px;
      height: 200px;
  }
`;

const FrostyCard = () => {
    return(
        <Wrapper>
            <Card></Card>
        </Wrapper>
    );
};

export default FrostyCard;