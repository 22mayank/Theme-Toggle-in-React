import "./App.scss";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import Lock from "@material-ui/icons/LockRounded";
import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import './theme.scss';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    textTransform: "capitalize",
  },
}));

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#52d869",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

function App() {
  const classes = useStyles();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState('light');

  const handleChange = (event) => {
    setIsDarkMode(event.target.checked);
    setTheme(isDarkMode ===  true ? 'light' : 'dark');
  };

  return (
    <div className={`App ${theme}`}>
      <FormControlLabel
        control={
          <IOSSwitch
            checked={isDarkMode}
            onChange={handleChange}
            name="toggle"
          />
        }
        className="toggle-theme"
        label={isDarkMode ? "Light Mode" : "Dark Mode"}
      />

      <div className="login-form">
        <Paper className={`dataPaper ${theme}`} elevation={1}>
          <Container component="main">
            <CssBaseline />
            <div className={classes.paper}>
              <Typography className="title" component="h1" variant="h5">
                Login
              </Typography>
              <form className={classes.form} noValidate>
                <InputLabel className="email-label" htmlFor="email">
                  Username
                </InputLabel>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Enter Username"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  className="email-text-field"
                />
                <InputLabel className="password-label" htmlFor="password">
                  Password
                </InputLabel>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  className="password-text-field"
                />
                <Grid container>
                  <Grid item xs>
                    <FormControlLabel
                      control={
                        <Checkbox
                          className="remember-me--checkbox"
                          value="remember"
                          color="primary"
                        />
                      }
                      label="Remember me"
                      className="checkbox-div"
                    />
                  </Grid>
                  <Grid className="forget-password" item xs>
                    <Lock />
                    <Link
                      className="forget-password-link"
                      href="#"
                      variant="body2"
                    >
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className="submit"
                >
                  Login
                </Button>
              </form>
              <div className="signup-label">
                <Typography component="div" className="documentStatusLabel">
                  Don’t have an account?
                </Typography>
                <Typography component="div" className="documentStatusSignLabel">
                  Sign Up
                </Typography>
              </div>
              <div className="other-options-login">
                <div className="divider-line1"></div>
                <Typography component="div" className="otherOptionLogin">
                  Or Login with
                </Typography>
                <div className="divider-line1"></div>
              </div>
            </div>
            <Box className="options-login" mt={8}>
              <Paper className="icons-options-login" elevation={1}>
                <i className="fa fa-google iconsLogin--google"></i>
              </Paper>
              <Paper className="icons-options-login" elevation={1}>
                <i className="fa fa-facebook-f iconsLogin--facebook"></i>
              </Paper>
            </Box>
          </Container>
        </Paper>
      </div>
    </div>
  );
}

export default App;
