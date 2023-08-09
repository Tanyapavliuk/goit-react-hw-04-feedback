import { Wrapper,Title } from "./Statistic.styled";

const Notification = ({ message }) => {
    return (
        <Wrapper>
            <Title>{message}</Title>
        </Wrapper>
    )
}
export default Notification;