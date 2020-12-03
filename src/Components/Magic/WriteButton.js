import React from "react";
import styled, { keyframes } from "styled-components";
import { rgba } from "polished";
import EditIcon from "../../assets/edit.svg";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${rgba("#eee", 0.75)};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 70px;
  width: 200px;
  background: #72c;
  border-radius: 1rem;
  cursor: pointer;
  color: #fff;
  font-family: "Poppins";
  font-size: 1.5rem;
  font-weight: 600;
  transition: all .3s ease-in-out;
  &:active {
    transform: scale(0.99);
  }
  &.writing {
    cursor: not-allowed;
  }
`;
const WritingIcon = keyframes`
  0% {
    transform: translateX(20px);
  }
  50% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(20px);
  }
`;
const Edit = styled.div`
  height: 30px;
  width: 30px;
  background: url(${EditIcon});
  background-size: 30px;
  background-position: center;
  transition: all .3s ease-in-out;
  &.writing {
    animation: ${WritingIcon} 1s ease-in-out infinite;
  }
`;
const WritingLine = keyframes`
  0% {
    width: 5px;
  }
  50% {
    width: 30px;
  }
  100% {
    width: 5px;
  }
`;
const Line = styled.div`
  position: absolute;
  height: 2px;
  transform: translate(-46px, 15px);
  width: 30px;
  background: #fff;
  transition: all .3s ease-in-out;
  &.writing {
    transform: translate(-56px, 15px);
    animation: ${WritingLine} 1s ease-in-out infinite;
  }
`;
const Text = "nothing";
const Writebutton = () => {
    const OnClick = event => {
        var btn = document.getElementById("btn");
        var text = document.getElementById("text");
        var line = document.getElementById("line");
        var icon = document.getElementById("icon");

        text.innerHTML = "Writing";
        line.classList.add("writing");
        icon.classList.add("writing");
        btn.classList.add("writing");


        setTimeout(() => {
            btn.classList.remove("writing");
            icon.classList.remove("writing");
            line.classList.remove("writing");
            text.innerHTML = "Write";
        }, 3000);
    }
    return (
        <Wrapper>
            <Button id="btn" onClick={OnClick}>
                <Edit id="icon" />
                <Line id="line" />
                <Text id="text">Write</Text>
            </Button>
        </Wrapper>
    );
}

export default Writebutton;