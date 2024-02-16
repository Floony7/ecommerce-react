import SignUpForm from "../../components/sign-up/sign-up-form";
import { Button } from "../../shared-styles/button";
import {
  signInWithGooglePopup,
  createUserDocument,
} from "../../utils/firebase/firebase.utils";
import { PageWrap } from "./sign-in.styles";

const SignIn = () => {
  const logUser = async () => {
    const { user } = await signInWithGooglePopup();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const userDocRef = await createUserDocument(user);
  };
  return (
    <PageWrap>
      <h2>Sign in</h2>
      <Button onClick={logUser}>Sign in with Google</Button>
      <h2>Sign Up with email and password</h2>
      <SignUpForm />
    </PageWrap>
  );
};

export default SignIn;
