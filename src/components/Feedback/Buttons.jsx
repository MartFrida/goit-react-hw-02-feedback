import React from "react";
import { StyledButton, StyledButtonsWrapper } from "./Feedback.styled";

export const Buttons = ({ handleGood, handleNeutral, handleBad }) => {
  return (
    <StyledButtonsWrapper>
      <StyledButton onClick={handleGood} >Good</StyledButton>
      <StyledButton onClick={handleNeutral}>Neutal</StyledButton>
      <StyledButton onClick={handleBad}>Bad</StyledButton>
    </StyledButtonsWrapper>
  )
};