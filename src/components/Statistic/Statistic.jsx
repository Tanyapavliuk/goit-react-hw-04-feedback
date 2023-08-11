import PropTypes from 'prop-types';
import { Text } from './Statistic.styled';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <Text>Good: {good}</Text>
      <Text>Neutral: {neutral}</Text>
      <Text>Bad: {bad}</Text>
      <Text>Total: {total()}</Text>
      <Text>Positive Feedback: {Math.floor(positivePercentage())}%</Text>
    </>
  );
};

export default Statistic;
Statistic.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};
