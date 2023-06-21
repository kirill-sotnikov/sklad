import { ComponentPropsWithoutRef, memo } from "react";
import style from "./category.module.css";

interface CategoryProps extends ComponentPropsWithoutRef<"button"> {
  isActive: boolean;
}

export const Category = memo<CategoryProps>(
  ({ children, isActive, ...props }) => {
    return (
      <button
        className={style.category}
        style={{ color: isActive && "#0085ff" }}
        {...props}
      >
        {isActive && (
          <div
            style={{
              height: 16,
              width: 2,
              marginRight: 8,
              backgroundColor: "#0085ff",
              display: "inline-block",
            }}
          ></div>
        )}
        {children}
      </button>
    );
  }
);
