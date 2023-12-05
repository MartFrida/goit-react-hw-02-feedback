import { StyledHeader, StyledTable, StyledTd } from "../Feedback/Feedback.styled"

export const Statistics = ({ good, neutral, bad, total, countTotalFeedback, countPositiveFeedbackPercentage }) => {
  return (
    <>
      <StyledHeader>Statistic</StyledHeader>
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
            {total ? <> <StyledTd>Total</StyledTd>
              <StyledTd>{countTotalFeedback}</StyledTd> </> : null}
          </tr>
          <tr>
            {total ? <>  <StyledTd>Positive feedback</StyledTd>
              <StyledTd>{countPositiveFeedbackPercentage}%</StyledTd></> : null}
          </tr>
        </tbody>
      </StyledTable>
    </>
  )
}