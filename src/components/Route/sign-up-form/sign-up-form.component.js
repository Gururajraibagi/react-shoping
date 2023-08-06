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

  const { displayname, email, password, confirmpassword } = formField;

  const upDateFormField = (event) => {
    const { value, name } = event.target;

    setFormFieldValue({
      ...formField,
      [name]: value,
    });
  };

  const submitForm = async (event) => {
    const { email, password } = formField;

    event.preventDefault();
    const resp = await signInWithEmailAndPassword(email, password);
    console.log("resp", resp);
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
          value={displayname}
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
          value={confirmpassword}
        />
        <button onClick={submitForm}> signup</button>
      </form>
    </>
  );
};
export default SignUpForm;
