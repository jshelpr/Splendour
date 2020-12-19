import React from "react";
import styled from "styled-components";
import { Scrollbars } from "react-custom-scrollbars";
import PushCard from "./Components/Cards/PushCards";
import ScrollabeCards from "./Components/Cards/ScrollableCards";
import StiffyCard from "./Components/Cards/StiffyCard";
import SendButton from "./Components/Magic/SendButton";
import SimpleLoader from "./Components/Magic/Simple Loader";
import UpdateButton from "./Components/Magic/UpdateButton";
import Topbar from "./Layout/TopBar";

const Splendour = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;
const Flex = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;
const HeadText = styled.div`
  font-family: "DM Sans";
  font-size: 20px;
  color: #fff;
  position: absolute;
  top: 85px;
  left: 270px;
`;
const App = () => {
  return (
    <Splendour>
      <Scrollbars>
        <Topbar />
      <Flex>
        <PushCard />
        <HeadText>Push Card</HeadText>
        <ScrollabeCards />
        <HeadText
         style={{
           transform: "translate(600px, 0px)",
           color: "#222"
         }}
         >
           Scrollabe Cards
         </HeadText>
        <StiffyCard />
        <HeadText
         style={{
           transform: "translate(0px, 550px)"
         }}
        >
          Stiffy Card
        </HeadText>
        <SendButton />
        <HeadText
          style={{
            transform: "translate(570px, 550px)"
          }}
        >
          Paper Plane Send Button
        </HeadText>
          <SimpleLoader />
          <HeadText
            style={{
              transform: "translate(0px, 1150px)",
              color: "#222"
            }}
          >
            Simple Loader
            </HeadText>
          <UpdateButton />
          <HeadText
            style={{
              transform: "translate(620px, 1150px)",
              color: "#fff"
            }}
          >
            Update Button
          </HeadText>
      </Flex>
      </Scrollbars>
    </Splendour>
  );
}

export default App;