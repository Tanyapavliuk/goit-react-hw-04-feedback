import { Button } from './Statistic.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(e => (
    <Button key={e} name={e} type="button" onClick={onLeaveFeedback}>
      {e.charAt(0).toUpperCase() + e.slice(1)}
    </Button>
  ));
};
export default FeedbackOptions;

//e.charAt(0).toUpperCase() + e.slice(1) - перша літера велика (слово.charAt(0).toUpperCase())+ інші маленькі (слово.slice(1))
