import { Statistics } from './Statistics/Statistics';
import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  };

  onLeaveFeedback = e => {
    const { name } = e.target;
    this.setState(state => ({ [name]: state[name] + 1 }));
  };

  render() {
    const total = this.countTotalFeedback();
    const {good, bad, neutral} = this.state
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'bad', 'neutral']}
            onLeaveFeedback={this.onLeaveFeedback}
          />

          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={(good * 100) / total}
            />
          )}
        </Section>
      </>
    );
  }
}
