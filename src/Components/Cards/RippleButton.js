import React from "react";
import styled, { keyframes } from "styled-components";
import { lighten, darken } from "polished";

const backgroundColor = "#6f4ae2";
const rippleAnimationDuration = "1.15s";

const rippleAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5) translate(-50%, -50%);
  }
  35% {
    opacity: .6;
  }
  70% {
    opacity: 0;
  }
  100% {
    transform: scale(3.25) translate(-50%, -50%);
  }
`;

const Card = styled.div`
  position: absolute;
  top: 40%;
  left: 40%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 100px;
  border-radius: 45px;
  background: ${backgroundColor};
  box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.15);
  user-select: none;
  cursor: pointer;
  & .ripple {
    position: absolute;
    z-index: 1;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #eeeeeeaa;
    box-shadow: inset -5px -5px 10px ${lighten(0.05, backgroundColor)},
      inset 5px 5px 10px ${darken(0.05, backgroundColor)};
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
  font-family: "Poppins";
  font-weight: 900;
`;

const RippleCard = props => {
    const onClick = event => {
        const rect = event.target.getBoundingClientRect();

        const rippleDomElement = document.createElement("span");
        rippleDomElement.className = "ripple";
        rippleDomElement.style.top = `${event.clientY - rect.y}px`;
        rippleDomElement.style.left = `${event.clientX - rect.x}px`;

        const rippleCard = document.getElementById("ripple-btn");

        const removeFunction = () => rippleCard.removeChild(rippleDomElement);

        rippleDomElement.addEventListener("webkitAnimationEnd", removeFunction);
        rippleDomElement.addEventListener("animationend", removeFunction);

        rippleCard.appendChild(rippleDomElement);
    };

    return (
        <Card id="ripple-btn" onClick={onClick}>
            <CardText>Ripple Button</CardText>
        </Card>
    );
};

export default RippleCard;