import { ComponentPropsWithoutRef, memo } from "react";
import style from "./category.module.css";

interface CategoryProps extends ComponentPropsWithoutRef<"button"> {
  isActive: boolean;
  category: string;
  onRemove: (category: string) => void;
}

/**
 * Кнопка категории, находится в левом меню
 */
export const Category = memo<CategoryProps>(
  ({ children, isActive, onRemove, category, ...props }) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
        <span className={style.cross} onClick={() => onRemove(category)}>
          x
        </span>
      </div>
    );
  }
);
