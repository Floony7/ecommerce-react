import React, { useState } from "react";
import Button from "../button/button.component";
import { ErrorList, Form, Label, SignUpSection } from "./sign-up-form.styles";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocument,
} from "../../utils/firebase/firebase.utils";
import { AuthError } from "firebase/auth";

const defaultFormState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

type FormFields = typeof defaultFormState;

const SignUpForm = () => {
  const [formFields, setFormFields] = useState<FormFields>(defaultFormState);
  const { displayName, email, password, confirmPassword } = formFields;
  const [error, setError] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return;
    }

    try {
      const res = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocument(res?.user, { displayName });
      setError([]);
      setFormFields(defaultFormState);
    } catch (error) {
      setError((prev) => [...prev, (error as AuthError).message]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpSection>
      <Form onSubmit={handleSubmit}>
        {error.length > 0 ? (
          <ErrorList>
            {error.map((err) => (
              <li>{removeFirebasePrefix(err)}</li>
            ))}
          </ErrorList>
        ) : null}
        <Label htmlFor="displayName">Display name</Label>
        <input
          value={displayName}
          onChange={handleChange}
          name="displayName"
          type="text"
          required
        />
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
        <Label htmlFor="confirm">Confirm password</Label>
        <input
          value={confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          type="password"
          required
        />
        <Button type="submit">Sign Up</Button>
      </Form>
    </SignUpSection>
  );
};

export default SignUpForm;

function removeFirebasePrefix(str: string): string {
  return str.replace(/^Firebase: /, "");
}
