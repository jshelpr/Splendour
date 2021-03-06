import styled, { keyframes } from "styled-components";
import { Text } from "../../Layout/AltText"; 

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #72c;
  @media screen and (max-width: 550px) {
      width: 100%;
  }
`;
const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 200px;
  background: #fff;
  border-radius: .5rem;
  cursor: pointer;
  box-shadow: 3px 3px 3px 0 #52c;
  transition: all .3s ease-in-out;
  overflow: hidden;
  &:active {
    transform: scale(0.99);
  }
  &.loading {
    cursor: not-allowed;
  }
`;
const UpdateText = styled.div`
  color: #b3b3b3;
  font-size: 35px;
  font-family: "SF Pro Text";
`;
const Loading = keyframes`
  from {
    transform: translate(200px, 21px);
    width: 50px;
  }
  to {
    transform: translate(-200px, 21px);
    width: 200px;
  }
`;
const Loader = styled.div`
  display: none;
  height: 5px;
  width: 200px;
  transform: translate(10px, 41px);
  background: linear-gradient(90deg, #119, #199, #72c, #166edc);
  &.loading {
    display: block;
    animation: ${Loading} 1.5s ease-in infinite;
  }
`;
const UpdateButton = () => {
  const OnClick = () => {
    var btn = document.getElementById('btn');
    var load = document.getElementById('load');
    var text = document.getElementById('update-text');
          btn.classList.add("loading");
          load.classList.add("loading");
          text.innerHTML = "Updating";
        setTimeout(() => {
          btn.classList.remove("loading");
          load.classList.remove("loading");
          text.innerHTML = "Updated!";
        }, 5000);
        setTimeout(() => {
          text.innerHTML = "Update";
        }, 6000)
      }
  return(
    <Wrapper>
       <Button onClick={OnClick} id="btn">
         <UpdateText id="update-text">Update</UpdateText>
         <Loader id="load">
         </Loader>
       </Button>
     <Text isDark>Update Button</Text>
    </Wrapper>
  );
}

export default UpdateButton;
