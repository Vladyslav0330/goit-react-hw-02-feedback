import { Component } from 'react';
import { Statistic } from './Statistic/Statistic';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Message } from './Message/Message';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
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
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={Object.keys(this.state)}
          />
        </Section>

        <Section title={'Statistics'}>
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
        </Section>
      </>
    );
  }
}
