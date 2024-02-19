import { BUTTON_TYPES } from "../../types";
import SignUpForm from "../../components/sign-up/sign-up-form";
import Button from "../../components/button/button.component";
import {
  signInWithGooglePopup,
  createUserDocument,
} from "../../utils/firebase/firebase.utils";
import { SignInSection } from "./sign-in.styles";

const SignIn = () => {
  const logUser = async () => {
    const { user } = await signInWithGooglePopup();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const userDocRef = await createUserDocument(user);
  };
  return (
    <SignInSection>
      <h2>Sign in</h2>
      <Button buttonType={BUTTON_TYPES.GOOGLE} onClick={logUser}>
        Sign in with Google
      </Button>
      <h2>Sign Up with email and password</h2>
      <SignUpForm />
    </SignInSection>
  );
};

export default SignIn;
