import { memo } from "react";
import { Button } from "../button/button";
import style from "./window.module.css";

interface WindowProps {
  onClose: () => void;
  onAdd: (element: HTMLFormElement) => void;
}

/**
 * Окно, которое появляется при нажатии на кнопку добавить продукт
 */
export const Window = memo<WindowProps>(({ onClose, onAdd }) => {
  return (
    <div
      className={style.wrapper}
      onMouseDown={(event) => {
        console.log("click");
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <form
        action=""
        onSubmit={(event) => {
          event.preventDefault();
          onAdd(event.currentTarget);
          onClose();
        }}
      >
        <div className={style.window}>
          <div>
            <p>
              Название{" "}
              <input type="text" name="name" style={{ display: "block" }} />
            </p>
            <p>
              sku <input type="text" name="sku" style={{ display: "block" }} />
            </p>
            <p>
              Стоимость{" "}
              <input type="number" name="price" style={{ display: "block" }} />
            </p>
            <p>
              Себестоимость{" "}
              <input type="number" name="cost" style={{ display: "block" }} />
            </p>
          </div>
          <Button type="submit">Добавить</Button>
        </div>
      </form>
    </div>
  );
});
