import { ComponentPropsWithoutRef, memo } from "react";
import style from "./button.module.css";

export const Button = memo<ComponentPropsWithoutRef<"button">>(
  ({ children, ...props }) => {
    return (
      <button type="button" {...props} className={style.btn}>
        {children}
      </button>
    );
  }
);
