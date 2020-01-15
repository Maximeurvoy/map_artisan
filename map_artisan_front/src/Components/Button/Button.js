import React from 'react';

const Button = (props) => {
  return (
    <>
      <button type="button" className="btn btn-outline-success">{props.specialty}</button>
    </>
  )
};

export default Button;