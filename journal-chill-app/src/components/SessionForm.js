import React from "react";
import {createStyles, makeStyles} from "@mui/styles";
import {
  Card,
  CardActions,
  CardHeader,
  TextField,
  Button,
  CardContent,
  Typography,
} from "@mui/material";
import GoogleButton from "react-google-button";
import {Link, useNavigate} from "react-router-dom";

const useStyles = makeStyles({
  card: {
    width: "100%",
    maxWidth: "400px",
    height: "75%",
    margin: "auto",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    height: "45%",
  },
  loginBtn: {
    flexGrow: 1,
    marginBottom: "1rem",
  },
  header: {
    textAlign: "center",
    background: "#212121",
    color: "#fff",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

const SessionForm = ({type}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Card
      className={classes.card}
      component={"form"}
      noValidate
      autoComplete="off"
    >
      <CardHeader className={classes.header} title="Journal App" />
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          mt: "2rem",
        }}
      >
        {type}
      </Typography>
      <CardContent className={classes.container}>
        {type === 'Create Account' && (<TextField
          fullWidth
          name="name"
          type="text"
          label="name"
          placeholder="name"
          margin="normal"
          disabled={type !== 'Create Account'}
        />)}
        <TextField
          fullWidth
          name="username"
          type="email"
          label="Username"
          placeholder="Username"
          margin="normal"
        />
        <TextField
          fullWidth
          name="password"
          type="password"
          label="Password"
          placeholder="Password"
          margin="normal"
          sx={{m: 1}}
        />
      </CardContent>

      <CardActions className={classes.buttonContainer}>
        <Button
          size="large"
          color="secondary"
          className={classes.loginBtn}
          type="button"
          sx={{mb: 1}}
        >
          {type !== "Login" ? "Sign Up" : "Sign In"}
        </Button>
        <GoogleButton className={classes.loginBtn} />
        <Link
          className={classes.loginBtn}
          to={type !== "Login" ? "auth/login" : "auth/register"}
        >
          {type !== "Login"
            ? "Already                                                                                                            have an account?"
            : "Don't have an account?"}
        </Link>
      </CardActions>
    </Card>
  );
};

export default SessionForm;
