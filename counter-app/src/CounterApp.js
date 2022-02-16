import React from 'react'
import PropTypes from 'prop-types';

function CounterApp({ value }) {

  const handleAdd = (e) => {
    console.log(e);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
      <button onClick={handleAdd}>+</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

export default CounterApp