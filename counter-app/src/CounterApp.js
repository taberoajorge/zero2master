import React from 'react'
import PropTypes from 'prop-types';

function CounterApp({ value }) {

  const [counter, setCounter] = React.useState(0);

  const handleAdd = () => {
    setCounter(c => c + 1)
  }; const handleSub = () => {
    setCounter(c => c - 1)
  }; const handleReset = () => {
    setCounter(value)
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSub}>-</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

export default CounterApp