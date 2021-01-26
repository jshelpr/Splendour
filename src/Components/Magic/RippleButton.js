import React from "react";
import styled, { keyframes } from "styled-components";
import { rgba } from "polished";
import { Colors } from "apple-colors";
import { Text } from "../../Layout/AltText"; 

const rippleAnimationDuration = "1.5s";

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${rgba("#166edc", 0.20)};
  transition: background 0.45s;
  @media screen and (max-width: 550px) {
      width: 100%;
  }
`;
const rippleAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5) translate(-50%, -50%);
  }
  35% {
    opacity: 0.6;
  }
  100% {
    transform: scale(3) translate(-50%, -50%);
  }
`;

const Button = styled.div`
  position: absolute;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 70px;
  border-radius: 3rem;
  background: ${Colors.WatchOS.VintageRose};
  user-select: none;
  cursor: pointer;
  & .ripple {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: ${rgba("#eeeeee", 0.40)};
    opacity: 0;
    pointer-events: none;
    transform-origin: 0% 0%;
    animation: ${rippleAnimation} ${rippleAnimationDuration};
  }
`;

const CardText = styled.div`
  position: relative;
  z-index: 2;
  font-weight: 600;
  color: #ffffff;
  pointer-events: none;
  font-size: 20px;
  font-family: "DM Sans", sans-serif;
  font-weight: 900;
`;

const RippleCard = props => {
    const onClick = event => {
        const rect = event.target.getBoundingClientRect();

        const rippleDomElement = document.createElement("span");
        rippleDomElement.className = "ripple";
        rippleDomElement.style.top = `${event.clientY - rect.y}px`;
        rippleDomElement.style.left = `${event.clientX - rect.x}px`;

        const rippleCard = document.getElementById("ripple-card");

        const removeFunction = () => rippleCard.removeChild(rippleDomElement);

        rippleDomElement.addEventListener("webkitAnimationEnd", removeFunction);
        rippleDomElement.addEventListener("animationend", removeFunction);

        rippleCard.appendChild(rippleDomElement);
    };

    return (
      <Wrapper>
        <Button id="ripple-card" onClick={onClick}>
            <CardText>Ripple Button</CardText>
        </Button>
        <Text>Ripple Button</Text>
      </Wrapper>
    );
};

export default RippleCard;