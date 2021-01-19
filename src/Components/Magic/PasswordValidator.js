import React, { useState } from "react";
import styled from "styled-components";
import { rgba } from "polished";

const Wrapper = styled.div`
  height: 100vh;
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${rgba("#eee", 0.50)};
  @media screen and (max-width: 550px) {
      width: 100%;
  }
`;
const InputWrapper = styled.div`
  padding: 0.512rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 250px;
  border-radius: 3rem;
  background: #fff;
  box-shadow: 0 20px 40px 0 ${rgba("#000", 0.10)};
  overflow: hidden;
`;
const Input = styled.input`
  font-family: "DM Sans", sans-serif;
  font-size: 17px;
  padding: 0 1rem;
  height: 45px;
  width: 100%;
  border-radius: 3rem;
  background: #fff;
  outline: none;
  border: none;
`;
const Button = styled.span`
  height: 40px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #72c;
  color: #fff;
  cursor: pointer;
  font-weight: 900;
  transition: width 0.45s, border-radius 0.35s;
`;

const PasswordValidator = () => {
    const [isValid, setValid] = useState(false);
    return(
        <Wrapper>
            <InputWrapper>
            <Input type="text" onFocus={() => setValid(false)} value={isValid ? "" : null} placeholder="Password" />
            <Button
            className="material-icons"
            onClick={() => setValid(!isValid)} 
            style={{
                width: `${isValid ? 100 : 50}px`,
                borderRadius: `${isValid ? 10 : 50}px`,
                background: `${isValid ? "rgb(241, 107, 107)" : "#72c"}`   
            }}
            >
                    {isValid ? "close" : "arrow_right" }
            </Button>
            </InputWrapper>
        </Wrapper>
    ); 
}

export default PasswordValidator;