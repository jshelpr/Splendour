import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  background: #199999aa;
  overflow: hidden;
  @media screen and (max-width: 550px) {
      width: 100%;
  }
`;
const Card = styled.div`
  height: 280px;
  width: 280px;
  border-radius: 30px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #fffffffa;
`;
const TabBar = styled.div`
  height: 30px;
  width: 250px;
  display: flex;
  border-radius: 0.512rem;
  border: 2px solid #166edc;
  overflow: hidden;
`;
const Tab = styled.span`
  height: 31px;
  width: 100%;
  padding: 0;
  margin: 0;
  color: #166edc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all .3s ease-in-out;
  &.active {
      background: #166edc;
      color: #fff;
  }
`;
const TabbedCards = () => {
    const [isActive, setActive] = useState("first");
    return(
        <Wrapper>
        <Card>
            <TabBar>
                <Tab 
                    onClick={() => setActive("first")}
                    className={isActive === "first" ? "active" : null}
                >Home</Tab>
                <Tab
                    onClick={() => setActive("second")}
                    className={isActive === "second" ? "active" : null}
                >Actvity</Tab>
                <Tab
                    onClick={() => setActive("third")}
                    className={isActive === "third" ? "active" : null}
                >Account</Tab>
            </TabBar>
            <div>
                {isActive === "first" ? <h1>Home</h1> : isActive === "second" ? <h1>Activity</h1> : <h1>Your Account.</h1> }
            </div>
        </Card>
        </Wrapper>
    );
} 

export default TabbedCards;