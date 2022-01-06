import PropTypes from 'prop-types';
import SCard from './style';

export default function Card({ result }) {
  return (
    <SCard>
      <span>{result.name}</span>
    </SCard>
  );
}

Card.propTypes = {
  result: PropTypes.objectOf(PropTypes.string),
};
Card.defaultProps = {
  result: {},
};
