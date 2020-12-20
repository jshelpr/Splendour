import styled, { keyframes } from "styled-components";
import ThreeDot from "../../assets/three-dot.svg";
import Navigate from "../../assets/navigate.svg";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #111122;
`;
const CardContainer = styled.div`
   position: absolute;
   height: 300px;
   width: 270px;
   border-radius: 1rem;
   display: flex;
   align-items: center;
   justify-content: center;
   overflow: hidden;
`;
const Card = styled.div`
   position: absolute;
   height: 300px;
   width: 270px;
   background: #ffffff;
   border-radius: 1rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
   overflow: hidden;
   z-index: 0;
`;
const Header = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #222;
  font-family: "DM Sans";
  font-size: 1.5rem;
  font-weight: 600;
  &::after {
    content: "";
    position: absolute;
    top: 20%;
    height: 2px;
    width: 230px;
    border-radius: 20px;
    background: #444444;
  }
`;
const Icon = styled.div`
  height: 25px;
  width: 25px;
  background-image: url(${ThreeDot});
  background-size: 25px;
  background-position: center;
  cursor: pointer;
`;
const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 200px;
  width: 100%;
`;
const Item = styled.div`
  height: 50px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  padding: 7px;
  color: #222;
  font-family: "DM Sans";
  font-size: 1rem;
  border-radius: .512rem;
  transition: all .3s ease-in-out;
  &:hover {
    background: #c4c4c4;
  }
`;
const PushAnimation = keyframes`
  from {
    transform: translateX(300px);
  }
  to {
    transform: translateX(0px);
  }
`;
const PushCard = styled.div`
  height: 300px;
  width: 270px;
  border-radius: 1rem;
  background: #166edc;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  z-index: 1;
  transition: all .3s ease-in-out;
  animation: ${PushAnimation} 1s ease-in-out;
`;
const NavigationBack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  font-family: "DM Sans";
  font-size: 1rem;
  color: #fff;
`;
const ArrowBack = styled.div`
  height: 25px;
  width: 25px;
  background-image: url(${Navigate});
  background-size: 25px;
  background-position: center;
`;
const PushHeader = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  font-family: "DM Sans";
  font-size: 1.5rem;
  font-weight: 600;
`;
const PushContent = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  font-family: "DM Sans";
  font-size: 1.5rem;
  font-weight: 600;
`;
const Paragraph = styled.div`
  height: 30px;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: "DM Sans";
  font-size: 1rem;
  font-weight: 400;
`;
const PushCards = () => {
    const OnClickPush = event => {
        const PushCardElement = document.getElementById("push-card");

        PushCardElement.style.display = "flex";
    }
    const PushBack = event => {
        const PushCardElement = document.getElementById("push-card");
        setTimeout(() => {
            PushCardElement.style.transform = "translateX(300px)";
        }, 100)
        setTimeout(() => {
            PushCardElement.style.display = "none";
        }, 700);
        setTimeout(() => {
            PushCardElement.style.transform = "translateX(0px)";
        }, 700);
    }
    return (
        <Wrapper>
            <CardContainer>
                <Card>
                    <Header>Navigation<Icon /></Header>
                    <Items>
                        <Item onClick={OnClickPush}>Functions</Item>
                        <Item onClick={OnClickPush}>Hosting</Item>
                        <Item onClick={OnClickPush}>DataBase</Item>
                        <Item onClick={OnClickPush}>Storage</Item>
                    </Items>
                </Card>
                <PushCard id="push-card">
                    <NavigationBack onClick={PushBack}><ArrowBack />Back</NavigationBack>
                    <PushHeader>Function</PushHeader>
                    <PushContent>
                        <Paragraph>Control How Your Website Works Within Thousands Of Options.</Paragraph>
                    </PushContent>
                </PushCard>
            </CardContainer>
        </Wrapper>
    );
}

export default PushCards;