import React, {useEffect, useReducer} from "react";
import {Box} from "@mui/system";
import useForm from "../../hooks/useForm";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  FormControl,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";

function TodoApp() {
  const [state, dispatch] = useReducer(reducer, [], init);
  const [{todo}, handleOnChange, reset] = useForm({
    todo: "",
  });

  useEffect(() => {
    localStorage.setItem("TODOS_V1", JSON.stringify(state));
  }, [state]);

  const AddTodo = () => {
    dispatch({
      type: actionType.add,
      payload: {
        id: new Date().getTime(),
        desc: todo,
        done: false,
      },
    });
    reset();
  };

  const completeTodo = (id) => {
    dispatch({
      type: actionType.complete,
      payload: id,
    });
  };

  const deleteTodo = (id) => {
    dispatch({
      type: actionType.delete,
      payload: id,
    });
  };

  return (
    <Container>
      <h1>Todos: {state.length}</h1>

      <Box
        component={"form"}
        autoComplete="off"
        sx={{
          "& .MuiTextField-root": {m: 1},
        }}
        onSubmit={(e) => {
          e.preventDefault();
          AddTodo();
        }}
      >
        <FormControl sx={{width: "100%"}}>
          <TextField
            onChange={handleOnChange}
            required
            label="Required"
            name="todo"
            value={todo}
          />
          <Button variant="contained" type="submit">
            Crear ToDo
          </Button>
        </FormControl>
      </Box>

      <List>
        {state.map(({desc, id, done}) => (
          <ListItem key={id}>
            <Card sx={{minWidth: "100%"}}>
              <CardContent>
                <Typography
                  sx={{
                    fontSize: 20,
                    textDecoration: done ? "line-through" : "none",
                  }}
                >
                  {desc}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => deleteTodo(id)}>Borrar</Button>
                <Button onClick={() => completeTodo(id)}>
                  {done ? "To Do" : "Completar"}
                </Button>
              </CardActions>
            </Card>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

const init = () => {
  return JSON.parse(localStorage.getItem("TODOS_V1")) || [];
};

const actionType = {
  add: "ADD_TODO",
  complete: "COMPLETE_TODO",
  delete: "DELETE_TODO",
};

function reducer(state, {type, payload}) {
  switch (type) {
    case actionType.add:
      return [...state, payload];
    case actionType.complete:
      return state.map((todo) => {
        if (todo.id === payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        } else {
          return todo;
        }
      });
    case actionType.delete:
      return state.filter((todo) => todo.id !== payload);
    default:
      return state;
  }
}

export default TodoApp;
