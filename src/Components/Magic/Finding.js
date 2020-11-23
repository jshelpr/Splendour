import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Icon = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  transition: all .3s ease-in-out;
`;
const move = keyframes`
  0%{
    transform: translateX(0);
  }
  20%{
    transform: translateX(-100px) translateY(-10px);
  }
  45%{
    transform: translateX(-150px) translateY(0);
  }
  60%{
    transform: translateX(-200px) translateY(10px) rotate(45deg);
  }
  90%{
    transform: translateX(-350px) translateY(15px) rotate(-15deg);
  }
  100%{
    transform: translate(0, 0);
  }
`;
const Search = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  transform: translateX(-100px);
  animation: ${move} 3s ease-in-out infinite;
`;

const Finder = () => {
    return (
        <Wrapper>
            <Icon><svg width="100" height="100" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.47461 12.9492C10.0166 12.9492 12.9492 10.0103 12.9492 6.47461C12.9492 2.93262 10.0103 0 6.46826 0C2.93262 0 0 2.93262 0 6.47461C0 10.0103 2.93896 12.9492 6.47461 12.9492ZM6.47461 11.8701C3.47852 11.8701 1.08545 9.4707 1.08545 6.47461C1.08545 3.47852 3.47217 1.0791 6.46826 1.0791C9.46436 1.0791 11.8638 3.47852 11.8701 6.47461C11.8765 9.4707 9.4707 11.8701 6.47461 11.8701ZM6.47461 3.24365C6.20166 3.24365 5.99854 3.44043 5.99854 3.71973V6.89355L6.04932 8.23291L5.41455 7.47119L4.65918 6.70947C4.57031 6.62695 4.45605 6.56982 4.32275 6.56982C4.0625 6.56982 3.86572 6.77295 3.86572 7.02686C3.86572 7.16016 3.90381 7.27441 3.98633 7.35693L6.10645 9.4707C6.2334 9.59766 6.34131 9.64844 6.47461 9.64844C6.61426 9.64844 6.72852 9.59131 6.84912 9.4707L8.96289 7.35693C9.04541 7.27441 9.09619 7.16016 9.09619 7.02686C9.09619 6.77295 8.89307 6.56982 8.63281 6.56982C8.49316 6.56982 8.37891 6.62061 8.29639 6.70947L7.54736 7.47119L6.8999 8.23926L6.95068 6.89355V3.71973C6.95068 3.44043 6.75391 3.24365 6.47461 3.24365Z" fill="#0A84FF" />
            </svg>
            </Icon>
            <Icon>
                <svg width="100" height="100" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.96777 14.6094H11.709C13.0229 14.6094 13.6768 13.9429 13.6768 12.6226V6.85889C13.6768 6.04004 13.5815 5.68457 13.0737 5.16406L9.57617 1.60303C9.09375 1.10791 8.69385 1 7.98291 1H4.96777C3.66016 1 3 1.67285 3 2.99316V12.6226C3 13.9492 3.65381 14.6094 4.96777 14.6094ZM5.01221 13.5874C4.3584 13.5874 4.02197 13.2383 4.02197 12.6035V3.01221C4.02197 2.38379 4.3584 2.02197 5.01855 2.02197H7.84326V5.70996C7.84326 6.50977 8.24316 6.90332 9.03662 6.90332H12.6548V12.6035C12.6548 13.2383 12.3184 13.5874 11.6582 13.5874H5.01221ZM9.15088 5.94482C8.89697 5.94482 8.80176 5.84326 8.80176 5.58936V2.21875L12.458 5.94482H9.15088Z" fill="#0A84FF" />
                </svg>
            </Icon>
            <Icon>
                <svg width="100" height="100" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.47461 12.9492C10.0166 12.9492 12.9492 10.0103 12.9492 6.47461C12.9492 2.93262 10.0103 0 6.46826 0C2.93262 0 0 2.93262 0 6.47461C0 10.0103 2.93896 12.9492 6.47461 12.9492ZM6.47461 11.8701C3.47852 11.8701 1.08545 9.4707 1.08545 6.47461C1.08545 3.47852 3.47217 1.0791 6.46826 1.0791C9.46436 1.0791 11.8638 3.47852 11.8701 6.47461C11.8765 9.4707 9.4707 11.8701 6.47461 11.8701ZM3.15479 7.16016H6.46826C6.71582 7.16016 6.9126 6.96973 6.9126 6.71582V2.4375C6.9126 2.18994 6.71582 1.99951 6.46826 1.99951C6.2207 1.99951 6.03027 2.18994 6.03027 2.4375V6.27783H3.15479C2.90088 6.27783 2.71045 6.46826 2.71045 6.71582C2.71045 6.96973 2.90088 7.16016 3.15479 7.16016Z" fill="#0A84FF" />
                </svg>
            </Icon>
            <Search>
                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </Search>
        </Wrapper>
    );
}

export default Finder;