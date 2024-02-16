import React, { useState } from "react";
import { Button } from "../../shared-styles/button";
import { Form, Label, PageWrap } from "./sign-up-form.styles";

interface FormFields {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialFormState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState<FormFields>(initialFormState);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("FORM_FIELDS", formFields);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <PageWrap>
      <Form onSubmit={handleSubmit}>
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
    </PageWrap>
  );
};

export default SignUpForm;
