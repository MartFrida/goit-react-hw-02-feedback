import { StyledHeader, StyledTable, StyledTd } from "../Feedback/Feedback.styled"

export const Statistics = ({ good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage }) => {
  return (
    <>

      <StyledHeader >Statistic</StyledHeader>
      <StyledTable>
        <tbody>
          <tr>
            <StyledTd>Good</StyledTd>
            <StyledTd>{good}</StyledTd>
          </tr>
          <tr>
            <StyledTd>Neutral</StyledTd>
            <StyledTd>{neutral}</StyledTd>
          </tr>
          <tr>
            <StyledTd>Bad</StyledTd>
            <StyledTd>{bad}</StyledTd>
          </tr>
          <tr>
            <StyledTd>Total</StyledTd>
            <StyledTd>{countTotalFeedback}</StyledTd>
          </tr>
          <tr>
            <StyledTd>Positive feedback</StyledTd>
            <StyledTd>{countPositiveFeedbackPercentage}%</StyledTd>
          </tr>
        </tbody>
      </StyledTable>
    </>
  )
}