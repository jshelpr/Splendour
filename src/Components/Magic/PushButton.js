import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "./index";

const Wrapper = styled.div`
  height: 100vh;
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  @media screen and (max-width: 550px) {
      width: 100vw;
  }
`;

const Button = styled.button`
  height: 50px;
  width: auto;
  min-width: 120px;
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(0deg, ${Colors.iOS.Light.Blue}, #fff 300px);
  font-family: "SF Pro Display";
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  border-radius: 10px;   
  border: none;
  outline: none;
  transition: all .3s ease-in-out;
  &:focus {
      box-shadow: 0 0 0 5px ${Colors.iOS.Light.Blue}6c;
  }
`;

const PushButton = () => {
    const [isFollowing, setFollow] = useState(false);
    return(
        <Wrapper>
            <Button
            onClick={() => setFollow(!isFollowing)}
            >
                { isFollowing ? "Following" : "Follow"}
            </Button>
        </Wrapper>
    );
}

export default PushButton;