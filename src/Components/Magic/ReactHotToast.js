import React from "react";
import styled from "styled-components";
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast📦.');

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #19456b;
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
  transition: all .3s ease;
  &:active {
    transform: scale(0.97);
  }
`;
const HotToast = () => {
  return (
    <Wrapper>
      <Button onClick={notify}>Make me a toast</Button>
      <Toaster position="bottom-center"
  reverseOrder={true} />
    </Wrapper>
  );
};

export default HotToast;
