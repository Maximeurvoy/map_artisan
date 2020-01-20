import React from 'react';

const Button = (props) => {

let handleclick=()=>{
  // console.log('test click bouton ')
}

  return (
    <>
      <button type="button" onClick={handleclick} className="btn btn-outline-success">{props.metier}</button>
    </>
  )
};

export default Button;