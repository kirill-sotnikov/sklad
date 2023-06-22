import { memo } from "react";
import style from "./product.module.css";

export interface ProductProps {
  name: string;
  SKU: string;
  price: number;
  cost: number;
  onRemove: (nameAndSKU: string) => void;
  onChange: (nameAndSKU: string) => void;
}

/**
 * Товар, выглядит как прямоугольник с полями название, SKU, стоимость, себестоимость
 */
export const Product = memo<ProductProps>(
  ({ name, SKU, price, cost, onRemove, onChange }) => {
    return (
      <div className={style.wrapper}>
        <span className={style.product_item}>{name}</span>
        <span className={style.product_item}>{SKU}</span>
        <span className={style.product_item}>{price}</span>
        <span className={style.product_item}>{cost}</span>
        <span className={style.product_item} style={{ position: "relative" }}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", cursor: "pointer", top: -2 }}
            onClick={() => {
              onChange(name + SKU);
            }}
          >
            <path
              d="M6.72713 21H1.86956C1.63894 21 1.41776 20.9084 1.25469 20.7453C1.09161 20.5822 1 20.3611 1 20.1304V15.2729C1.00011 15.0426 1.09158 14.8217 1.25435 14.6587L14.6586 1.25449C14.8217 1.09154 15.0427 1 15.2733 1C15.5038 1 15.7249 1.09154 15.8879 1.25449L20.7455 6.1088C20.9085 6.27186 21 6.49295 21 6.72347C21 6.95399 20.9085 7.17508 20.7455 7.33814L7.34126 20.7457C7.17831 20.9084 6.95745 20.9999 6.72713 21Z"
              stroke="#0085FF"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 5L17 11"
              stroke="#0085FF"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              top: -2,
              position: "absolute",
              right: 0,
              cursor: "pointer",
            }}
            onClick={() => {
              onRemove(name + SKU);
            }}
          >
            <path
              d="M21 4.6676H1"
              stroke="#0085FF"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.27271 9.56738V16.1003"
              stroke="#0085FF"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.7273 9.56738V16.1003"
              stroke="#0085FF"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.1818 4.6676V20.1834C19.1818 20.3999 19.086 20.6077 18.9155 20.7608C18.7451 20.9139 18.5138 21 18.2727 21H3.72727C3.48616 21 3.25493 20.9139 3.08444 20.7608C2.91396 20.6077 2.81818 20.3999 2.81818 20.1834V4.6676"
              stroke="#0085FF"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.5455 4.26648V2.63324C15.5455 2.20008 15.3539 1.78466 15.0129 1.47836C14.672 1.17207 14.2095 1 13.7273 1H8.27274C7.79053 1 7.32807 1.17207 6.98709 1.47836C6.64612 1.78466 6.45456 2.20008 6.45456 2.63324V4.26648"
              stroke="#0085FF"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    );
  }
);
