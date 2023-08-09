import { Button} from "./Statistic.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            <Button name="good" type="button" onClick={onLeaveFeedback}>Good</Button>  
            <Button name="neutral" type="button" onClick={onLeaveFeedback}>Neutral</Button>  
            <Button name="bad" type="button" onClick={onLeaveFeedback}>Bad</Button>  
        </>
    )
}
export default FeedbackOptions;
