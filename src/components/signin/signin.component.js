import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import { useState } from "react";
import Button from "../button/button.component";
import Forminput from "../form-input/form-input.component";

import "./sign-in.styles.scss";

const defaultFormValue = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formField, setFormFieldValue] = useState(defaultFormValue);

  const { email, password } = formField;

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

    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password);
      //await createUserDocumentFromAuth(user);
      console.log("resp user:", user);
      resetFormFields();
    } catch (error) {
      console.log("from main error", error);
    }
  };

  const signInWithGooglePopupButton = async (event) => {
    event.preventDefault();
    try {
      await signInWithGooglePopup();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="sign-up-container">
        <h2>Already have an account</h2>
        <span>Sigin with your email and password</span>
        <form>
          <Forminput
            label="Email:"
            type="email"
            name="email"
            required
            onChange={upDateFormField}
            value={email}
          ></Forminput>
          <Forminput
            label="password:"
            type="password"
            name="password"
            onChange={upDateFormField}
            value={password}
            required
          ></Forminput>

          <div className="buttons-container">
            <Button type="submit" onClick={submitForm}>
              Signin
            </Button>
            <Button
              type="button"
              buttonType="google"
              onClick={signInWithGooglePopupButton}
            >
              Google SignIn
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
