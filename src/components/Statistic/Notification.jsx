import PropTypes from 'prop-types';
import { Wrapper, Title } from './Statistic.styled';

const Notification = ({ message }) => {
  return (
    <Wrapper>
      <Title>{message}</Title>
    </Wrapper>
  );
};
export default Notification;
Notification.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  omessage: PropTypes.string,
};
