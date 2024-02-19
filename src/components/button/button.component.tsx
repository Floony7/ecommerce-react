import { ButtonHTMLAttributes } from "react";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";
import { BUTTON_TYPES } from "../../types";

type ButtonProps = {
  buttonType?: BUTTON_TYPES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const getButton = (buttonType = BUTTON_TYPES.BASE): typeof BaseButton =>
  ({
    [BUTTON_TYPES.BASE]: BaseButton,
    [BUTTON_TYPES.GOOGLE]: GoogleSignInButton,
    [BUTTON_TYPES.INVERTED]: InvertedButton,
  }[buttonType]);

const Button = ({
  buttonType,
  isLoading,
  children,
  ...otherProps
}: ButtonProps) => {
  const ButtonWrap = getButton(buttonType);
  return (
    <ButtonWrap disabled={isLoading} {...otherProps}>
      {isLoading ? "spinner" : children}
    </ButtonWrap>
  );
};

export default Button;
