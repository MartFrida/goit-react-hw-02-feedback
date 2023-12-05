import { StyledButton, StyledButtonsWrapper } from "../Feedback/Feedback.styled"

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <StyledButtonsWrapper>
      <StyledButton onClick={() => onLeaveFeedback('good')} >Good</StyledButton>
      <StyledButton onClick={() => onLeaveFeedback('neutral')}>Neutral</StyledButton>
      <StyledButton onClick={() => onLeaveFeedback('bad')}>Bad</StyledButton>
    </StyledButtonsWrapper>
  )
}