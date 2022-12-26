// import { TextField } from 'app/components/TextField';
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Checkbox,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Theme,
} from "@mui/material";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

import { selectError, selectLoading, selectLoginForm } from "../selectors";
import { actions } from "../slice";
import { LoginErrorType } from "../types";
import { validate } from "./validator";
const useStyles = makeStyles((theme: Theme) => ({
  loginButtonWrapper: {},
  signUpWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // fontFamily: 'Roboto',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "30px",
    color: "#333333",
  },
  signUpText: {
    marginLeft: "8px",
    color: "skyblue",
    textDecoration: "underline",
    fontWeight: "bold",
    cursor: "pointer",
    // fontFamily: 'Roboto',
  },
  loginText: {
    fontFamily: "Open Sans",
    fontStyle: "Mixed",
    fontSize: "32px",
    fontweight: "500",
    verticalAlign: "top",
    color: "#2A3333",
    marginLeft: "30px",
    paddingBottom: "12px",
    letterSpacing: "3%",
  },

  buttonProgress: {
    color: "#fff",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  form: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  keepSignedin: {
    marginTop: 0,
    "& .MuiFormControlLabel-root": {
      marginRight: 0,
      marginLeft: 0,
    },
  },
  submit: {
    width: "385px",
    height: "56px",
    fontSize: "16px",
    fontFamily: "Open Sans",
    fontStyle: "bold",
    lineHeight: "30px",
    fontWeight: 700,
    borderRadius: "4px",
    color: "#FFFFFF",
    "&:hover": {
      background: "#0D28F4",
    },
  },
  languageSwitch: {
    position: "absolute",
    top: "10px",
    right: "10px",
  },
  email: {
    marginTop: 0,
    marginBottom: 23,
    borderRadius: "4px",
    "& input:-webkit-autofill": {
      "-webkit-box-shadow": "0 0 0 30px #fff inset !important",
      backgroundColor: "#fff",
      backgroundImage: "none !important",
      color: "#000000 !important",
    },
    "& .MuiFormControl-root": {},
    "& .MuiOutlinedInput-input": {},
    "& .MuiOutlinedInput-root": {
      width: "385px",
      height: "56px",
      borderColor: "coral",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "6px",
    },
  },
  password: {
    margin: 0,
    borderRadius: "4px",
    "& input:-webkit-autofill": {
      "-webkit-box-shadow": "0 0 0 30px #fff inset !important",
      backgroundColor: "#fff",
      backgroundImage: "#fff !important",
      color: "#000000 !important",
      border: "1px solid #E2E7EB",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "4px",
    },
    "& .MuiFormControl-root": {},
    "& .MuiOutlinedInput-input": {},
    "& .MuiOutlinedInput-root": {
      width: "385px",
      height: "56px",
    },
  },
  labelKeepSignedIn: {
    fontSize: 16,
    fontWeight: 400,
    fontFamily: "Open Sans",
    marginLeft: "5px",
  },
  dontHaveAccountText: {
    // fontFamily: 'Roboto',
  },
  phoneIcon: {
    position: "absolute",
    top: -18,
    right: -45,
  },
  forgotPassword: {
    color: "#387E8D",
    fontSize: "14px",
    lineHeight: "16px",
    fontWeight: 400,
    fontFamily: "Open Sans",
    textDecoration: "underline",
  },
  textWrapper: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "space-between",
    margin: "5px auto 24px",
  },
  copyRightText: {
    fontSize: 14,
    color: "#00000062",
    textAlign: "center",
    position: "absolute",
  },
}));

export function LoginForm({ className }) {
  const classes = useStyles();
  const form = useSelector(selectLoginForm);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [changeColor, setChangeColor] = useState<boolean>(false);
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  interface State {
    password: string;
    showPassword: boolean;
  }
  const [values, setValues] = useState<State>({
    password: "",
    showPassword: false,
  });
  const loginSuccess = () => {
    navigate("/mobile-users");
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // console.log("name", name);
    // console.log("value", value);
    if (value) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }

    dispatch(actions.setForm({ key: `loginForm.${name}`, value }));
  };

  const onSubmitForm = (evt?: React.FormEvent<HTMLFormElement>) => {
    try {
      /* istanbul ignore next  */
      evt?.preventDefault();
      setErrorMsg("");
      const errors = validate(form);
      if (errors.length > 0) {
        dispatch(actions.setFormErrors({ key: "loginForm", errors }));
        return;
      }

      dispatch(actions.login({ callback: loginSuccess }));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    // console.log("useEffect :", form);
    if (error) setErrorMsg(error);
    // eslint-disable-next-line
  }, [error]);

  const errorText = errorMsg;
  useEffect(() => {
    dispatch(actions.setForm({ key: `loginForm.email`, value: "" }));
    dispatch(actions.setForm({ key: `loginForm.password`, value: "" }));
  }, []);
  return (
    <form className={classes.form} noValidate onSubmit={onSubmitForm}>
      {errorText && (
        <Alert className={classes.error} severity="error">
          {errorText}
        </Alert>
      )}
      <Box width={450} mt={1}>
        <Typography className={classes.loginText} gutterBottom>
          Welcome to{" "}
          <span style={{ color: "#000", fontSize: "42px", fontWeight: "600" }}>
            {/* Orpak Form Heading */}
            Orpak
          </span>
        </Typography>
      </Box>
      <div dir="ltr" style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          placeholder="Email"
          name="email"
          autoComplete={"off"}
          error={!!form.email.error}
          helperText={form.email?.error}
          autoFocus
          value={form.email.value}
          onChange={onChange}
          className={classes.email}
          sx={{
            background: "#fff",
          }}
        />
        <TextField
          id="outlined-adornment-password"
          name="password"
          placeholder="Password"
          type={values.showPassword ? "text" : "password"}
          value={form.password.value}
          onChange={onChange}
          error={!!form.password.error}
          helperText={form.password?.error}
          autoComplete={"off"}
          className={classes.password}
          sx={{
            background: "#fff",
          }}
        ></TextField>
      </div>

      <Box
        className={classes.loginButtonWrapper}
        sx={{
          my: 3,
        }}
      >
        <Button
          variant="contained"
          className={classes.submit}
          sx={{
            backgroundColor: changeColor ? "#0D28F4" : "#87959F",
          }}
          type="submit"
        >
          {isLoading ? (
            <CircularProgress size={24} className={classes.buttonProgress} />
          ) : (
            t("login.button_text")
          )}
        </Button>
      </Box>
    </form>
  );
}

export const loginError = (error: LoginErrorType | undefined | null) => {
  if (!error) return null;
  switch (error) {
    case LoginErrorType.ERROR:
      return {
        message: "An error has occurred! 😞",
        email: true,
        password: true,
      };
    case LoginErrorType.EMAIL_EMPTY:
      return { message: "Please enter email", email: true };
    case LoginErrorType.PASSWORD_EMPTY:
      return { message: "Please enter password", password: true };
    default:
      return { message: error, password: true, email: true };
  }
};
export default LoginForm;
