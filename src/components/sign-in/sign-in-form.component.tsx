import React, { useState } from "react";
import Button from "../button/button.component";
import { Form, Label, ErrorList } from "../../shared-styles/forms";
import { ButtonContainer, SignInSection } from "./sign-in-form.styles";
import { BUTTON_TYPES } from "../../types";
import {
  createUserDocument,
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { AuthError } from "firebase/auth";
import { removeFirebasePrefix } from "../../utils/functions";

const defaultFormState = {
  email: "",
  password: "",
};

type FormFields = typeof defaultFormState;

const SignInForm = () => {
  const [formFields, setFormFields] = useState<FormFields>(defaultFormState);
  const { email, password } = formFields;
  const [errors, setErrors] = useState<string[]>([]);

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocument(user);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      return;
    }

    try {
      const res = await signInUserWithEmailAndPassword(email, password);
      console.log(res);
      setErrors([]);
      setFormFields(defaultFormState);
    } catch (err) {
      const message = (err as AuthError).message;
      if (errors.some((error) => error === message)) {
        return;
      }
      setErrors((prev) => [...prev, message]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInSection>
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <Form onSubmit={handleSubmit}>
        {errors.length > 0 ? (
          <ErrorList>
            {errors.map((err, idx) => (
              <li key={idx}>{removeFirebasePrefix(err)}</li>
            ))}
          </ErrorList>
        ) : null}
        <Label htmlFor="email">Email</Label>
        <input
          value={email}
          onChange={handleChange}
          name="email"
          type="email"
          required
        />
        <Label htmlFor="password">Password</Label>
        <input
          value={password}
          onChange={handleChange}
          name="password"
          type="password"
          required
        />
        <ButtonContainer>
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPES.GOOGLE}
          >
            Sign in with Google
          </Button>
        </ButtonContainer>
      </Form>
    </SignInSection>
  );
};

export default SignInForm;
