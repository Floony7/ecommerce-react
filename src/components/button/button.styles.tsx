import styled from "styled-components";

/*
STEPS:
1. Create BaseButton
2. Use this BaseButton to create variants

USAGE:
1. Pass the buttonType prop into Button component. This can be passed to a function that determines which button styled
to render.
*/

export const BaseButton = styled.button`
  margin-top: 0.3rem;
  border-radius: 3px;
  padding: 0.6rem;
  /* border: 1px solid hsl(200, 60%, 70%); */
  background-color: hsl(150, 50%, 50%);
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: hsl(150, 60%, 60%);
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: hsl(220, 70%, 50%);

  &:hover {
    background-color: hsl(200, 70%, 50%);
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: hsl(0 0% 100% / 0.8);
  border: 1px solid var(--clr-magenta);
  color: hsla(270, 50%, 30%, 50%);
  border: 1px solid black;

  &:hover {
    background-color: var(--clr-sky-blue);
  }
`;
