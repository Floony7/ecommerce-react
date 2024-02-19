import SignUpForm from "../../components/sign-up/sign-up-form";
import {
  signInWithGooglePopup,
  createUserDocument,
} from "../../utils/firebase/firebase.utils";
import { AuthenticationSection } from "./authentication.styles";
import SignInForm from "../../components/sign-in/sign-in-form.component";

const Authentication = () => {
  return (
    <AuthenticationSection>
      <SignInForm />
      <SignUpForm />
    </AuthenticationSection>
  );
};

export default Authentication;
