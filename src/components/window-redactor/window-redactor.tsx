import { memo } from "react";
import { Button } from "../button/button";
import style from "./window-redactor.module.css";

interface WindowRedactorProps {
  name: string;
  SKU: string;
  price: number;
  cost: number;
  onClose: () => void;
  onSubmit: (element: HTMLFormElement) => void;
}

/**
 * Окно, которое появляется при нажатии на кнопку редактировать
 */
export const WindowRedactor = memo<WindowRedactorProps>(
  ({ name, SKU, price, cost, onClose, onSubmit: onAdd }) => {
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
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  style={{ display: "block" }}
                />
              </p>
              <p>
                sku{" "}
                <input
                  type="text"
                  name="sku"
                  defaultValue={SKU}
                  style={{ display: "block" }}
                />
              </p>
              <p>
                Стоимость{" "}
                <input
                  type="number"
                  name="price"
                  defaultValue={price}
                  style={{ display: "block" }}
                />
              </p>
              <p>
                Себестоимость{" "}
                <input
                  type="number"
                  name="cost"
                  defaultValue={cost}
                  style={{ display: "block" }}
                />
              </p>
            </div>
            <Button type="submit">Сохранить</Button>
          </div>
        </form>
      </div>
    );
  }
);
