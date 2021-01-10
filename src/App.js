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
import RippleButton from "./Components/Magic/RippleButton";
import CountryPicker from "./Components/Magic/CountryPicker";
import LazyLoadCard from "./Components/Cards/SwitchableCard";

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

const App = () => {
  return (
    <Splendour>
      <Scrollbars>
        <Topbar />
        <Flex>
          <PushCard />
          <ScrollabeCards />
          <StiffyCard />
          <SendButton />
          <SimpleLoader />
          <UpdateButton />
          <RippleButton />
          <CountryPicker />
          <LazyLoadCard />
        </Flex>
      </Scrollbars>
    </Splendour>
  );
}

export default App;