import React from 'react'
import { useCounter } from '../../hooks/useCounter'


function CounterApp() {
  const { state, increment, decrement, reset } = useCounter(1);
  return (
    <>
      <h1>counter {state}</h1>
      <hr />
      <button onClick={() => increment()} >+</button>
      <button onClick={reset} >reset</button>
      <button onClick={() => decrement()} >-</button>
    </>
  )
}

export default CounterApp