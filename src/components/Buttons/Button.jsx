import PropTypes from 'prop-types';
import css from '../Buttons/Buttons.module.css';

export const Button = ({
  handleClickGood,
  handleClickNeutral,
  handleClickBad,
}) => (
    <ul className={css.listBtn}>
    <li>
      <button onClick={handleClickGood}>Good</button>
    </li>
    <li>
      <button onClick={handleClickNeutral}>Neutral</button>
    </li>
    <li>
      <button onClick={handleClickBad}>Bad</button>
    </li>
  </ul>
);

Button.propTypes = {
  handleClickGood: PropTypes.func.isRequired,
  handleClickNeutral: PropTypes.func.isRequired,
  handleClickBad: PropTypes.func.isRequired,
};
