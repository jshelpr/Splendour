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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  width: 260px;
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
  justify-content: space-around;
  background: #72c;
  color: #fff;
  cursor: pointer;
  font-weight: 900;
  transition: width 0.45s, border-radius 0.35s;
`;
const Invalid = styled.div`
  animation: invalid-anim 2s;
  @keyframes invalid-anim {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const PasswordValidator = () => {
    const [isValid, setValid] = useState(false);
    return(
        <Wrapper>
            <InputWrapper>
            <Input 
            style={{
               display: `${isValid ? "none" : "flex"}`
            }}
            type="text" 
            onFocus={() => setValid(false)} 
            value={isValid ? "" : null} 
            placeholder="Password" />
            <Button
            className="material-icons"
            onClick={() => setValid(!isValid)} 
            style={{
                height: `${isValid ? 55 : 50}px`,
                width: `${isValid ? 260 : 50}px`,
                borderRadius: `${isValid ? 10 : 50}px`,
                background: `${isValid ? "rgb(241, 107, 107)" : "#72c"}`   
            }}
            >
                    {isValid ? <Invalid>Invalid Password</Invalid> : <span style={{ animation: `invalid-anim 2s`, overflow: "hidden" }} className="material-icons">arrow_forward</span> }
                    {isValid ? <span style={{ animation: `invalid-anim 2s` }} className="material-icons">close</span> : ""}
            </Button>
            </InputWrapper>
        </Wrapper>
    ); 
}

export default PasswordValidator;