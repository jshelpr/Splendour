import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "apple-colors";
import { Text } from "../../Layout/AltText"; 

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Colors.WatchOS.SpearMint};
  @media screen and (max-width: 550px) {
      width: 100vw;
  }
`;
const Input = styled.input`
  height: 66px;
  width: 180px;
  bakground: #fff;
  outline: none;
  border: none;
  font-size: 20px;
  padding: 0 0.712rem;
  border-radius: 0.512rem;
  border: 4px solid ${Colors.WatchOS.DenimBlue};
  transition: all .3s ease-in-out;
  &::placeholder {
    user-select: none;
  }
`;

const OutlinedInput = () => {
    const [isFocused, setFocus] = useState(false);
    return(
        <Wrapper>
        <Input 
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)} 
        style={{
            boxShadow: `${isFocused ? `0 0 0 5px ${Colors.WatchOS.SeaFoam}` : ""}`
        }}
        placeholder="Email Address"
        type="email"
        />
        <Text>Outlined Input</Text>
        </Wrapper>
    );
}

export default OutlinedInput;