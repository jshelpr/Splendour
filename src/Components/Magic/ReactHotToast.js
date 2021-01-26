import React from "react";
import styled from "styled-components";
import toast, { Toaster } from "react-hot-toast";
import { Text } from "../../Layout/AltText"; 

const notify = () => toast.success('Successfuly Made you a toast.');  

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #19456b;
  @media screen and (max-width: 550px) {
    width: 100%; 
  }
`;
const Button = styled.div`
  height: 70px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.512rem;
  background: #16c79a;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: all .3s ease;
  &:active {
    transform: scale(0.97);
  }
`;
const HotToast = () => {
  return (
    <Wrapper>
      <Button onClick={notify}>Make me a toast</Button>
      <Toaster position="top" />
      <Text isDark>Hot Toast🔥</Text>
    </Wrapper>
  );
};

export default HotToast;
