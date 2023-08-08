import SignIn from "../Route/signin/signin.component";
import SignUpForm from "../Route/sign-up-form/sign-up-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentiation-container">
      <SignIn></SignIn>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default Authentication;
