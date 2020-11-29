import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  font-family: "Product Sans";
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  jsutify-content: center;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 250px;
  left: 35%;
  height: 100px;
  width: 250px;
  border-radius: 3rem;
  background: #72c;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0px 4px  40px 4px #7722ccaa;
  transition: all .3s ease-in-out;
  &:active {
    transform: scale(0.98);
  }
  &.inactive {
    cursor:not-allowed;
  }
`;
const SendPaper = keyframes`
  0% {
    transform: translateX(-100px);
  }
  40% {
    transform: translateX(0) scale(1.3);
  }
  100% {
    transform: translateX(300px);
  }
`;
const SendPlease = keyframes`
  0%{
    transform: rotate(45deg);
  }
  60% {
    transform: rotate(-15deg);
  }
  80% {
    transform: rotate(0) translate(15px, 0);
  }
  100% {
    transform: none;
  }
`;
const PaperPlane = styled.div`
  z-index: 2;
  margin-right: 5px;
  transition: all .3s ease-in-out;
  animation: ${SendPlease} 1s ease-in-out;
  &.sending {
    animation: ${SendPaper} 4s ease-in-out;
  }
`;
const TextIn = keyframes`
  0% {
    opacity: 0;
  }
  90% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
`;
const Text = styled.div`
  z-index: 0;
  margin-left: 15px;
  position: relative;
  font-weight: 900;
  color: #fff;
  font-size: 30px;
  transition: all .3s ease-in-out;
  animation: ${TextIn} 3s ease-in-out;
`;
const SendButton = () => {
    const OnClick = event => {
        const paperplane = document.getElementById("paperplane");
        var text = document.getElementById("text");
        var btn = document.getElementById("btn");

        paperplane.classList.add("sending");
        setTimeout(() => {
            text.innerHTML = "Sending...";
            btn.style.cursor = "not-allowed";
        }, 100);
        setTimeout(() => {
            text.style.opacity = 0;
        }, 1900);
        setTimeout(() => {
            text.style.opacity = 1;
            text.innerHTML = "Sent";
        }, 3900);
        paperplane.addEventListener("animationend", () => {
            paperplane.classList.remove("sending");
        });
        setTimeout(() => {
            btn.style.cursor = "pointer";
            text.innerHTML = "Send"
        }, 4900);
    }
    return (
        <Wrapper>
            <Button id="btn" onClick={OnClick}>
                <PaperPlane id="paperplane"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="35px" height="35px"><path d="M0 0h24v24H0z" fill="none" /><path fill="white" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg></PaperPlane>
                <Text id="text">Send</Text>
            </Button>
        </Wrapper>
    );
}
export default SendButton;
