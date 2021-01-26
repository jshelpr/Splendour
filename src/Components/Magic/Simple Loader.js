import styled, { keyframes } from "styled-components";
import { Text } from "../../Layout/AltText"; 

const Wrapper = styled.div`
   position: relative;
   height: 100vh;
   width: 50%;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-around;
   overflow: hidden;
   @media screen and (max-width: 550px) {
      width: 100%;
  }
`;
const Loading = keyframes`
   from {
     transform: rotate(0deg);
   }
   to {
     transform: rotate(360deg);
   }
`;
const Loader = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 10px solid #c4c4c4;
  border-left: 10px solid #222222;
  transform: rotate(0deg);
  border-left-radius: 50%;
  animation: ${Loading} .9s linear infinite;
`;
const StackLoader = () => {
  return (
    <Wrapper>
      <Loader></Loader>
      <Text>Simple Loader</Text>
    </Wrapper>
  );
}

export default StackLoader;