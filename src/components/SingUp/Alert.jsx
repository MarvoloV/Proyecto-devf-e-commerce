import React from 'react';

// eslint-disable-next-line react/prop-types
const Alert = ({ message }) => {
  let result = null;

  if (message) result = <p className="alert">{message}</p>;

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{result}</>;
};
export default Alert;
