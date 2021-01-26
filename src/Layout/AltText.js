import React from "react";
import styled from "styled-components";

const Text = styled.p`
  position: absolute;
  bottom: ${p => p.isBig ? 20 : 100}px;
  font-size: 18px;
  font-weight: 900;
  ${p => p.isDark ? "color: #fff" : "color: #222" };
`;

const AltText = (props) => (
    <Text>{props.children}</Text>
)

export { AltText, Text };