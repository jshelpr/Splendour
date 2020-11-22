import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
   position: absolute;
   top: 0px;
   height: 100%;
   width: 100%;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-around;
   overflow: hidden;
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
  height: 300px;
  width: 300px;
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
    </Wrapper>
  );
}

export default StackLoader;