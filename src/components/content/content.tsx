import { useCategoryList } from "../../../use-category-list";
import { ProductList } from "../product-list/product-list";
import style from "./content.module.css";

/**
 * Место для контента, в нем отображаются товары
 */
export const Content = () => {
  const { currentCategory } = useCategoryList();
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <span className={style.header_item}>Название</span>
        <span className={style.header_item}>SKU</span>
        <span className={style.header_item}>Стоимость</span>
        <span className={style.header_item}>Себестоимость</span>
        <span className={style.header_item}></span>
      </div>
      <div style={{ padding: "0 22px" }}>
        <ProductList category={currentCategory} />
      </div>
    </div>
  );
};
