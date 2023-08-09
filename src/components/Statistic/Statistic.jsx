import { Text } from "./Statistic.styled";


const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
       return (
           <>
                <Text>Good: {good}</Text>
                <Text>Neutral: {neutral}</Text>
                <Text>Bad: {bad}</Text>
                <Text>Total: {total()}</Text>
                <Text>Positive Feedback: {Math.floor(positivePercentage())}%</Text>  
            </>
        )
};
  

export default Statistic;