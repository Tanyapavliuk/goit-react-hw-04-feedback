import { useState } from 'react';
import Statistic from './Statistic/Statistic';
import FeedbackOptions from './Statistic/FeedbackOptions';
import Section from './Statistic/Section';
import Notification from './Statistic/Notification';
import { useEffect } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickFeedback = e => {
    console.log(e.target.name);
    const name = e.target.name; //значення name = назві відгуку
    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  useEffect(() => {});

  const total = () => {
    return good + neutral + bad;
  };
  const positivePercentage = () => {
    return (100 * good) / (good + neutral + bad);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={handleClickFeedback}
        />
      </Section>
      {good + neutral + bad ? (
        <Section title="Statistic">
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </>
  );
};

export default App;
