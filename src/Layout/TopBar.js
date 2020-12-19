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
  justify-content: space-between;
  background: #121117;
  position: absolute;
  top: 0;
  left: 0;
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
  font-family: 'DM Sans';
  font-size: 18px;
  letter-spacing: 4px;
  color: ${rgba("#fff", .70)};
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
            <a href="https://www.github.com/haneenmahd/Splendour"><GithubIcon /></a>
            <Text>
                MICRO INTERACTIONS
                </Text>
            <a href="https://www.instagram.com/haneenmahdin"><InstagramIcon /></a>
        </Topbar>
    );
}

export default TopBar;