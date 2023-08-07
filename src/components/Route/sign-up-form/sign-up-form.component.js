import { useState } from "react";
import { signInWithEmailAndPassword } from "../../../utils/firebase/firebase.utils";
const defaultFormValue = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formField, setFormFieldValue] = useState(defaultFormValue);

  const { displayName, email, password, confirmPassword } = formField;

  const upDateFormField = (event) => {
    const { value, name } = event.target;

    setFormFieldValue({
      ...formField,
      [name]: value,
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      console.log("pass", password, confirmPassword, displayName, email);
      alert("passsword does not match");
      return;
    }
    try {
      await signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log("from main error", error);
      if (error.code === "400") {
        alert(error.message);
      } else alert("login failed unknown error");
    }
  };

  return (
    <>
      <h2>Signupform</h2>
      <form>
        <label> Name:</label>
        <input
          type="text"
          name="displayName"
          onChange={upDateFormField}
          value={displayName}
        />
        <label> Email:</label>

        <input
          type="email"
          name="email"
          onChange={upDateFormField}
          value={email}
        />
        <label> password:</label>

        <input
          type="password"
          name="password"
          onChange={upDateFormField}
          value={password}
        />
        <label> Confirm password:</label>

        <input
          type="password"
          name="confirmPassword"
          onChange={upDateFormField}
          value={confirmPassword}
        />
        <button onClick={submitForm}> signup</button>
      </form>
    </>
  );
};
export default SignUpForm;
