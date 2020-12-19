import styled from "styled-components";
import Bg from "../../assets/MacBook.png";

const Wrapper = styled.div`
  height: 100vh;
  width: 50vw;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  background: #199999aa;
  overflow: hidden;
`;
// Be Good to take this color of the body : #199999aa :)
const Card = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  height: 300px;
  width: 400px;
  background: #fff;
  box-shadow: 4px 4px 2px 0px rgba(25, 25, 25, .15);
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  transition: all .3s ease-in-out;
  &:active {
    transform: scale(0.9);
  }
`;
const Img = styled.div`
  height: 270px;
  width: 100%;
  background: url(${Bg});
  background-size: 450px;
`;
const Text = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 20px;
  font-family: "DM Sans";
  font-weight: 900;
  height: 50px;
  color: #222222;
  background: #fffeee;
`;
const StiffyCard = () => {
    return (
        <Wrapper>
         <Card>
          <Img></Img>
          <Text>Hi! Great To See You Again!</Text>
          </Card>
        </Wrapper>
    );
};

export default StiffyCard;
