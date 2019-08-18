import React from 'react';

const Toast = ({ message, isError }) => {
  return (
    <>
      {message === '' ? null : (
        <div
          className="toast"
          style={{
            backgroundColor: isError ? '#dd2000' : 'green',
          }}
        >
          <span>{message}</span>
        </div>
      )}
    </>
  );
};

export default Toast;
