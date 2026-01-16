import React, { useState } from 'react'


function CounterApp() {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20
  });

  const { counter1, counter2 } = state;

  return (
    <>
      <h1>counter {counter1}</h1>
      <h1>counter {counter2}</h1>
      <hr />
      <button
        onClick={() => {
          setState({ ...state, counter1: counter1 + 1, })
        }}
      >+</button>
    </>
  )
}

export default CounterApp