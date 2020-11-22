import styled, { keyframes } from "styled-components";

const fade = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-200px);
  }
  50% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-200px);
  }
`;
const Wrapper = styled.div`
   height: 100%;
   width: 100%;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-around;
   overflow: hidden;
`;
const Loader = styled.div`
   height: 50px;
   width: 300px;
   background: #166edc;
   border-radius: 50px;
   color: #166edc;
   margin: 20px;
   animation: ${fade} 1s ease-in-out infinite;
`;

const StackLoader = () => {
    return (
        <Wrapper>
            <Loader></Loader>
            <Loader></Loader>
            <Loader></Loader>
            <Loader></Loader>
            <Loader></Loader>
            <Loader></Loader>
            <Loader></Loader>
            <Loader></Loader>
            <Loader></Loader>
            <Loader></Loader>
            <Loader></Loader>
            <Loader></Loader>
            <Loader></Loader>
            <Loader></Loader>
            <Loader></Loader>
            <Loader></Loader>
            <Loader></Loader>
            <Loader></Loader>
            <Loader></Loader>
            <Loader></Loader>
        </Wrapper>
    );
}

export default StackLoader;