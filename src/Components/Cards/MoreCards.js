import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  font-family: "SF Pro Text";
  height: 100vh;
  width: 100vw;
  background: #166edc;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MoreIcon = styled.div`
  position: absolute;
  top: 200px;
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all .3s ease-in-out;
  &:active {
    transform: scale(0.95);
  }
  &:hover {
    background: #a4a4a4aa;
  }
`;
const appear = keyframes`
  0% {
    transform: scale(0) translateX(-100px) translateY(-400px);
  }
  to {
    transform: scale(1) translateX(0) translateY(0);
  }
`;
const MoreItems = styled.div`
  position: absolute;
  top: 40%;
  left: 53vw;
  z-indez: 100;
  overflow: hidden;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 230px;
  width: 180px;
  background: #eee;
  border: 1px solid #c4c4c4;
  border-radius: 1rem;
  transition: all .3s ease-in-out;
  animation: ${appear} .5s ease-in-out;
`;
const MoreHeader = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-item: flex-start;
  height: 60px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #c4c4c4;
`;
const Header = styled.div`
  margin: 7px 10px;
  font-weight: 900;
  font-size: 20px;
  color: #222;
`;
const SubHeader = styled.div`
  margin: 0px 10px;
  font-size: 17px;
  color: #222;
`;
const Items = styled.div`
  color: #222;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
`;
const Item = styled.div`
  font-weight: 700;
  display: flex;
  align-item: center;
  justify-content: center;
  text-align: center;
  height: 50px;
  width: 100%;
  cursor: pointer;
  transition: all .3s ease-in-out;
  &:active {
    transform: scale(0.98);
  }
  &:hover {
    background: #166edc;
    color: #fff;
  }
`;
const MoreCards = () => {
  const onClick = event => {
    var more_items = document.getElementById('more-items');
    var item = document.getElementById('items');
    more_items.style.display = "flex";
    item.addEventListener("click", () => {
      more_items.style.display = "none";
    });
  }
  return(
    <Wrapper>
      <MoreIcon onClick={onClick}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="100px" height="100px"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg></MoreIcon>
      <MoreItems id="more-items">
        <MoreHeader>
          <Header>Projects</Header>
          <SubHeader>Recently Added</SubHeader>
        </MoreHeader>
        <Items id="items">
          <Item><p>Chat App</p></Item>
          <Item><p>Social Media App</p></Item>
          <Item><p>Video Chat App</p></Item>
        </Items>
      </MoreItems>
    </Wrapper>
  );
}

export default MoreCards;
