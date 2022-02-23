import React, {useCallback, useState} from "react";
import ShowIncrement from "./ShowIncrement";

function CallbackHook() {
  const [counter, setCounter] = useState(10);

  const increment = useCallback((num) => {
    setCounter(prevState => prevState + num);
  }, [setCounter]);

  return (
    <>
      <h1>Callback Hook {counter} </h1>
      <ShowIncrement increment={increment} />
    </>
  );
}

export default CallbackHook;
