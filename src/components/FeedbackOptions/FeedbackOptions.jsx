import { StyledButton, StyledButtonsWrapper } from "../Feedback/Feedback.styled"

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  const gradeArray = ['good', 'neutral', 'bad']
  return (
    <StyledButtonsWrapper>
      {gradeArray.map((item, index) =>
        <StyledButton key={index} onClick={() => onLeaveFeedback(item)} >{item}</StyledButton>
      )}
    </StyledButtonsWrapper>
  )
}