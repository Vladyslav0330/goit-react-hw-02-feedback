import PropTypes from 'prop-types';
import css from '../Message/Message.module.css';


export const Message = ({ message }) => {
  return <p className={css.message}>{message}</p>;
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
};
