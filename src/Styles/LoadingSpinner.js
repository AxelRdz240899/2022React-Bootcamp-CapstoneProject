import styled, { keyframes } from "styled-components";

export const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  } 
`;

export const StyledSpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
`;
export const StyledSpinnerDiv = styled.div`
  text-align: center;
  border: 7px solid #57c0ff;
  border-left-color: transparent;
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  margin: 0;
  animation: ${rotateAnimation} 1s linear infinite;
`;

export const StyledText = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
`;
