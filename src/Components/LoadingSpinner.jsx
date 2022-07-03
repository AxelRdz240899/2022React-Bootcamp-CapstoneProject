import React from "react";
import {
  StyledSpinnerContainer,
  StyledSpinnerDiv,
  StyledText,
} from "Styles/LoadingSpinner";
export default function LoadingSpinner() {
  return (
    <StyledSpinnerContainer>
      <StyledSpinnerDiv />
      <StyledText> Loading...</StyledText>
    </StyledSpinnerContainer>
  );
}
