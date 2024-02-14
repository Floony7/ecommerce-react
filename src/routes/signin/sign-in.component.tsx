import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logUser = async () => {
    const res = await signInWithGooglePopup();
    console.log(res);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logUser}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
