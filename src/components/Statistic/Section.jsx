import PropTypes from 'prop-types';
import { Wrapper, Title } from './Statistic.styled';

const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

export default Section;
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
