import React from 'react';
import PropTypes from 'prop-types';

const Toast = ({ message, isError }) => (
  <>
    {message === '' ? null : (
      <div
        className="toast"
        style={{
          backgroundColor: isError ? '#dd2000' : '#129a7d',
        }}
      >
        {message}
      </div>
    )}
  </>
);

Toast.propTypes = {
  message: PropTypes.string,
  isError: PropTypes.bool,
};

Toast.defaultProps = {
  message: '',
  isError: false,
};

export default Toast;
