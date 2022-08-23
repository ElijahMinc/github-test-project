import React, { ButtonHTMLAttributes } from "react";
import { getClassNames } from "../../../helpers/getClassNames";
import styles from "./Button.module.scss";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...buttonProps }) => {
  return (
    <button
      className={getClassNames(
        styles.btn,
        "mb-10",
        buttonProps.className ?? ""
      )}
      {...buttonProps}
    >
      {children ?? "< Back"}
    </button>
  );
};
