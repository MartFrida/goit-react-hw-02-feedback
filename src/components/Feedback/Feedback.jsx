import React from "react";
import { StyledButton, StyledButtonsWrapper, StyledFeedback, StyledHeader, StyledTable, StyledTd } from "./Feedback.styled"
import { Statistics } from "../Statistics/Statistics";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";


export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (grade) => {
    switch (grade) {
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
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage(good, total) {
    return (good * 100 / total).toFixed(2);
  }

  render() {
    const { good, neutral, bad } = this.state
    const total = this.countTotalFeedback()
    return (
      <StyledFeedback>

        <StyledHeader>Please leave feedback</StyledHeader>
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />

        <Statistics good={good} neutral={neutral} bad={bad} total={total} countTotalFeedback={this.countTotalFeedback()} countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage(good, total)} />
      </StyledFeedback>
    )
  }
}