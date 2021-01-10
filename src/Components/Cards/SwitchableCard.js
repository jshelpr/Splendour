import React,{ useState } from "react";
import styled, { keyframes } from "styled-components";
import { rgba } from "polished";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const CardAnim = keyframes`
  from {
      opacity: 0;
      transform: translate(-50%, -50%);
  }
  to {
      opacity: 1;
      transform: translate(0%, 0%);
  }
`;
const Card = styled.div`
  height: 300px;
  width: 280px;
  padding: 2rem 1.5rem;
  border-radius: 2rem;
  box-shadow: 0 20px 40px 10px ${rgba("#c4c4c4", 10)};
  transition: all .3s ease-in-out;
  animation: ${CardAnim} 0.76s;
  & h1 {
      color: #fff;
  }
  & p {
      color: #ffffffaf;
  }
`;
const LazyLoadCard = () => {
    const [isChecked, setChecked] = useState(true);
    return(
        <Wrapper>
        <Card style={{
            background: `#${isChecked ? "52c" : "166edc"}`
        }} 
        onClick={() => setChecked(!isChecked)}
        >
            {isChecked  ? <h1>Love Your Voice!</h1> : <h1>Rewrite the Stars</h1>}
            {isChecked ? <p>Singed By <strong>JONY</strong></p> : <p>Singed By <strong>The Greatest Showman</strong></p>}
        </Card>
        </Wrapper>
    );
}

export default LazyLoadCard;