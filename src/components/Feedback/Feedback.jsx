import React from "react";
import { StyledButton, StyledButtonsWrapper, StyledFeedback, StyledHeader, StyledTable, StyledTd } from "./Feedback.styled"


export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleChange = (grade) => {
    switch (grade) {
      // case 'good': this.setState({ good: this.state.good + 1 });
      case 'good': this.setState(prevState => ({ good: prevState.good + 1 }));
        break;
      case 'neutral': this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
        break;
      case 'bad': this.setState(prevState => ({ bad: prevState.bad + 1 }));
        break;
      default: console.log('Something wrong')
    }
  }

  countTotalFeedback() {
    // в кожній функції роблю деструктуризацію стейту?
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    // return Math.round((good * 100 / (good + neutral + bad)), -2);
    return (good * 100 / (good + neutral + bad)).toFixed(2);
  }

  render() {
    const { good, neutral, bad } = this.state
    return (
      <StyledFeedback>

        <StyledHeader>Please leave feedback</StyledHeader>
        <StyledButtonsWrapper>
          <StyledButton onClick={() => this.handleChange('good')} >Good</StyledButton>
          <StyledButton onClick={() => this.handleChange('neutral')}>Neutral</StyledButton>
          <StyledButton onClick={() => this.handleChange('bad')}>Bad</StyledButton>
        </StyledButtonsWrapper>

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
              <StyledTd>Total</StyledTd>
              <StyledTd>{this.countTotalFeedback()}</StyledTd>
            </tr>
            <tr>
              <StyledTd>Positive feedback</StyledTd>
              <StyledTd>{this.countPositiveFeedbackPercentage()}%</StyledTd>
            </tr>
          </tbody>
        </StyledTable>
      </StyledFeedback>
    )
  }
}