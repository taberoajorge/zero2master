import React, {useState, useMemo} from "react";
import {useCounter} from "../../hooks/useCounter";
import {procesoPesado} from "../../helpers/procesoPesado";

import {Button, Container} from "@mui/material";

export const MemoHook = () => {
  const {state, increment} = useCounter(5000);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(state), [state]);

  return (
    <Container>
      <h1>MemoHook</h1>
      <h3>
        Counter: <small>{state}</small>{" "}
      </h3>
      <hr />

      <p> {memoProcesoPesado} </p>

      <Button
        className="btn btn-primary"
        onClick={() => increment(1)}
        variant="contained"
      >
        +1
      </Button>

      <Button
        className="btn btn-outline-primary ml-3"
        onClick={() => {
          setShow(!show);
        }}
        variant="contained"
      >
        Show/Hide {JSON.stringify(show)}
      </Button>
    </Container>
  );
};
