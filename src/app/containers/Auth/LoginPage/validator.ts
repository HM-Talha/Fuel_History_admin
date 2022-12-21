import { FormError } from "app/containers/types";
import { LoginForm } from "../types";

export function validate(form: LoginForm): Array<FormError> {
  const errors: Array<FormError> = [];
  if (!form.email.value) {
    errors.push({
      name: "email",
      error: "Email can't be blank",
    });
  } else if (form.email.value !== "admin@Orpak.com") {
    errors.push({
      name: "email",
      error: "Invalid Email",
    });
  }
  if (!form.password.value) {
    errors.push({
      name: "password",
      error: "Password can't be blank",
    });
  } else if (form.password.value !== "1234") {
    errors.push({
      name: "password",
      error: "Invalid Password",
    });
  }

  return errors;
}
