import SignIn from "../Route/signin/signin.component";
import SignUpForm from "../Route/sign-up-form/sign-up-form.component";

const Authentication = () => {
  return (
    <div>
      <h2>Sign in page</h2>
      <SignIn></SignIn>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default Authentication;
