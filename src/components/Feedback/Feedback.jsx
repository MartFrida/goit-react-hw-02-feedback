import React from "react";
import { StyledFeedback } from "./Feedback.styled"
import { Statistics } from "../Statistics/Statistics";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
import { Section } from "../Section/Section";
import { Notification } from "../Notification/Notification";


export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (grade) => {
    // switch (grade) {
    //   case 'good': this.setState(prevState => ({ good: prevState.good + 1 }));
    //     break;
    //   case 'neutral': this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    //     break;
    //   case 'bad': this.setState(prevState => ({ bad: prevState.bad + 1 }));
    //     break;
    //   default: console.log('Something wrong')
    // }

    this.setState(prevState => ({ [grade]: prevState[grade] + 1 }))
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
        <Section title='Please leave feedback'>
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
          {total ?
            <Statistics good={good} neutral={neutral} bad={bad} total={total} countTotalFeedback={this.countTotalFeedback()} countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage(good, total)}
            /> : <Notification message="There is no feedback" />
          }
        </Section>
      </StyledFeedback>
    )
  }
}