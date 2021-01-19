import React, { useState } from "react";
import styled from "styled-components";
import { rgba } from "polished";
import json from "./countryPicker.json";

const Body = styled.div`
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

const Card = styled.div`
  width: 300px;
  height: 278px;
  padding: 2rem 1.5rem;
  border-radius: 3rem;
  background: #7245c7;
  overflow: hidden;
  box-shadow: 0 20px 40px 10px ${rgba("#c4c4c4", 10)};
`;

const Input = styled.input`
  font-family: "DM Sans", sans-serif;
  height: 48px;
  width: 100%;
  margin-bottom: 1rem;
  border: 0;
  border-bottom: 2px solid ${rgba("#fff", 0.5)};
  outline: none;
  background: transparent;
  color: ${rgba("white", 0.85)};
  transition: all .3s ease-in-out;
  &:focus {
    border-bottom: 2px solid #fff;
    border-color: ${rgba("white", 1)};
  }
  &::placeholder {
    color: ${rgba("white", 0.5)};
  }
`;

const InputWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  margin-bottom: 1rem;
  padding: 0;
  outline: none;
  border: 0;
  color: ${rgba("white", 0.85)};
  background: transparent;
`;

const InputPlaceholder = styled.div`
  color: ${rgba("white", 0.5)};
`;

const InputIcon = styled.span`
  height: 50px;
  width: 50px;
  color: ${rgba("white", 0.5)};
`;

const Wrapper = styled.div`
  position: relative;
`;

const Dialog = styled.div`
  position: absolute;
  overflow: auto;
  z-index: 2;
  top: 44px;
  left: -24px;
  padding: 3.725rem 1.725rem;
  width: 100%;
  height: 278px;
  border-radius: 3rem;
  visibility: ${(p) => (p.open ? "visible" : "hidden")};
  opacity: ${(p) => (p.open ? 1 : 0)};
  transform: translateY(${(p) => (p.open ? 0 : "2rem")});
  background: #fff;
  transition-property: visibility, opacity, transform;
  transition-duration: 0.35s;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Row = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  border: 0;
  padding: 10px;
  border-radius: 0.5rem;
  background: transparent;
  text-align: left;
  outline: none;
  transition: background 0.25s;
  &:hover {
    background: ${rgba("#834fe6", 0.1)};
  }
`;

const Flag = styled.img`
  flex: 0 0 30px;
  width: 30px;
  outline: none;
`;

const Country = styled.div`
  flex: 1 1 auto;
  margin-left: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${rgba("black", 0.75)};
  outline: none;
`;

const Code = styled.div`
  flex: 0 1 auto;
  color: ${rgba("black", 0.37)};
  outline: none;
`;

const Button = styled.input`
  font-family: "DM Sans", sans-serif;
  font-weight: 900;
  font-size: 20px;
  width: 100%;
  height: 50px;
  padding: 0;
  outline: none;
  border: 0;
  margin-top: 2rem;
  border-radius: 1rem;
  background: #482788;
  color: white;
  cursor: pointer;
`;

const CountryPicker = () => {
    const [open, setOpen] = useState(false);
    const [country, setCountry] = useState("");

    const cdnPath = (name) =>
        `https://cdn.jsdelivr.net/gh/low6dev/fiver-react-assets@main/flags/${name.replace(
            /\s+/g,
            "-"
        )}.png`;

    return (
      <Body>
        <Card>
            <Wrapper>
                <InputWrapper onClick={() => setOpen(!open)}>
                    <InputPlaceholder>
                        {country === "" ? "Country" : country}
                    </InputPlaceholder>
                    <InputIcon className="material-icons">
                        {open ? "close" : "expand_more"}
                    </InputIcon>
                </InputWrapper>
                <Dialog open={open}>
                    {json.map((c) => (
                        <Row
                            key={c.name}
                            onClick={() => {
                                setOpen(false);
                                setCountry(c.name);
                            }}
                        >
                            <Flag src={cdnPath(c.name)} />
                            <Country>{c.name}</Country>
                            <Code>{c.code}</Code>
                        </Row>
                    ))};
                </Dialog>
            </Wrapper>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Button type="button" value="Save" />
        </Card>
        </Body>
    );
};

export default CountryPicker;