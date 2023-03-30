import { Component } from 'react';
import { Statistic } from './Statistic/Statistic';
import { Button } from './Buttons/Button';
import { Title } from './Title/Title';
import { Message } from './Message/Message';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handleClickGood = e => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleClickNeutral = e => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleClickBad = e => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  }
  countPositiveFeedbackPercentage() {
    const positivePercentage =
      +((this.state.good / this.countTotalFeedback()) * 100).toFixed(2) || 0;

    return positivePercentage;
  }

  render() {
    const total = this.countTotalFeedback();
    return (
      <>
        <Title title={'Please leave feedback'} />
        <Button
          handleClickGood={this.handleClickGood}
          handleClickNeutral={this.handleClickNeutral}
          handleClickBad={this.handleClickBad}
        />
        <Title title={'Statistics'} />
        {total ? (
          <Statistic
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positive={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Message message="There is no feedback " />
        )}
      </>
    );
  }
}
