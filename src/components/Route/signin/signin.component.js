import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";

const SignIn = () => {
  const onSignIn = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
    console.log(user);
  };
  return (
    <>
      <div>SignIn</div>
      <button onClick={onSignIn}> signin hello?</button>
      hello
    </>
  );
};

export default SignIn;
