import { Component } from "react";
import Statistic from "./Statistic/Statistic";
import FeedbackOptions from "./Statistic/FeedbackOptions";
import Section from "./Statistic/Section";
import Notification from "./Statistic/Notification";

class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
   countTotalFeedback = () => {
        return  this.state.good + this.state.neutral + this.state.bad;
    }
    countPositiveFeedbackPercentage = () => {
        return 100 * this.state.good/this.countTotalFeedback();
  }
  handleClickFeedback = (e) => {
    const name = e.target.name; //значення name = назві відгуку
    this.setState((prevState) => ({ //prevState(попередній стан) - це аргумент, попередній стан компонента перед оновленням
      [name]: prevState[name] + 1
    }));
  }
  render() {
    const {good,neutral,bad} = this.state
    return (
      <>
        <Section title="Please leave feedback">
        <FeedbackOptions options={{ good, neutral, bad }} onLeaveFeedback={this.handleClickFeedback} />
        </Section>
        {this.countTotalFeedback() !== 0 ?
        <Section title="Statistic"><Statistic good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage} /></Section>
        :
        <Notification message="There is no feedback"></Notification>} 
      </>
  );
  }
}
export default App;

