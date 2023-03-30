import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistic = ({ bad, good, neutral, total, positive }) => (
  <ul className={css.list}>
    <li> Good: {good}</li>
    <li>Bad: {bad}</li>
    <li>Netural: {neutral}</li>
    <li>Total: {total}</li>
    <li>Positive feedback: {positive}%</li>
  </ul>
);

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
