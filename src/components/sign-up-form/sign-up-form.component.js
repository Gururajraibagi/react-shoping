import { useState, useContext } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import Forminput from "../form-input/form-input.component";

import "./sign-up.styles.scss";

import Button from "../button/button.component";
import { UserContext } from "../../context/user.context";

const defaultFormValue = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formField, setFormFieldValue] = useState(defaultFormValue);
  const { setCurrentUser } = useContext(UserContext);

  const { displayName, email, password, confirmPassword } = formField;

  const upDateFormField = (event) => {
    const { value, name } = event.target;

    setFormFieldValue({
      ...formField,
      [name]: value,
    });
  };

  const resetFormFields = () => {
    setFormFieldValue(defaultFormValue);
  };

  const submitForm = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      console.log("pass", password, confirmPassword, displayName, email);
      alert("passsword does not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log("from signInWithEmailAndPassword", user);
      setCurrentUser(user);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      console.log("from main error", error);
      if (error.code === "400") {
        alert(error.message);
      } else alert("login failed unknown error");
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Signup with your email and password</span>
      <form>
        <Forminput
          label="Name:"
          type="text"
          name="displayName"
          onChange={upDateFormField}
          value={displayName}
        ></Forminput>
        <Forminput
          label="Email:"
          type="email"
          name="email"
          onChange={upDateFormField}
          value={email}
        ></Forminput>
        <Forminput
          label="password:"
          type="password"
          name="password"
          onChange={upDateFormField}
          value={password}
        ></Forminput>

        <Forminput
          label="Confirm password:"
          type="password"
          name="confirmPassword"
          onChange={upDateFormField}
          value={confirmPassword}
        ></Forminput>

        <Button onClick={submitForm}> signup</Button>
      </form>
    </div>
  );
};
export default SignUpForm;
