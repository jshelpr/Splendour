import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import Github from "../assets/github.svg";
import Instagram from "../assets/instagram.svg";

const Topbar = styled.div`
  height: 60px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  border-bottom: 1px solid #c4c4c4;
`;
const GithubIcon = styled.div`
  height: 30px;
  width: 30px;
  background: url(${Github});
  background-size: 30px;
  background-position: center;
  margin-left: 20px;
`;
const Text = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  font-weight: 900;
  letter-spacing: 4px;
  color: ${rgba("#222", 1)};
  @media screen and (max-width: 550px) {
    font-size: 14px;
  }
`;
const InstagramIcon = styled.div`
  height: 30px;
  width: 30px;
  background: url(${Instagram});
  background-size: 30px;
  background-position: center;
  margin-right: 20px;
`;

const TopBar = () => {
    return (
        <Topbar>
            <a target="_blank" rel="noreferrer" href="https://www.github.com/haneenmahd/Splendour"><GithubIcon /></a>
            <Text>
                MICRO INTERACTIONS
                </Text>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/haneenmahdin"><InstagramIcon /></a>
        </Topbar>
    );
}

export default TopBar;