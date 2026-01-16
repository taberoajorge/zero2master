import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {createStyles, makeStyles} from "@mui/styles";
import {
  Card,
  CardActions,
  CardHeader,
  TextField,
  Button,
  CardContent,
} from "@mui/material";
import {Box} from "@mui/system";
import {AuthContext} from "../auth/authContext";
import {types} from "../types/types";
import useForm from "../hooks/useForm";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
      width: 400,
      margin: " 20px auto",
      justifyContent: "center",
      alignItems: "center",
    },
    loginBtn: {
      flexGrow: 1,
    },
    header: {
      textAlign: "center",
      background: "#212121",
      color: "#fff",
    },
    card: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "0.2fr",

      height: "70vh",
    },
  })
);

const Login = () => {
  const {user, dispatch} = useContext(AuthContext);

  const classes = useStyles();
  const navigate = useNavigate();
  
  const [values, handleOnChange] = useForm({
    username: "",
    password: "",
  });

  const {username, password} = values;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch({
      type: types.login,
      payload: {username: username},
    });
    navigate("/heroes", {
      replace: true,
    });
  };

  return (
    <Box
      component={"form"}
      className={classes.container}
      noValidate
      autoComplete="off"
      onSubmit={handleLogin}
    >
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Heros App" />
        <CardContent>
          <div>
            <TextField
              fullWidth
              name="username"
              type="email"
              label="Username"
              placeholder="Username"
              margin="normal"
              onChange={handleOnChange}
            />
            <TextField
              fullWidth
              name="password"
              type="password"
              label="Password"
              placeholder="Password"
              margin="normal"
              onChange={handleOnChange}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.loginBtn}
            onClick={handleLogin}
            type="button"
          >
            Login
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Login;
