import { useRouter } from "next/router";
import { useCategoryList } from "../../../use-category-list";
import { Button } from "../button/button";
import { Category } from "../category/category";
import style from "./category-list.module.css";

/**
 * Список категорий, который находится слева
 */
export const CategoryList = () => {
  const router = useRouter();
  const { value, add, currentCategory, setCurrentCategory, remove } =
    useCategoryList();

  return (
    <div className={style.wrapper}>
      <div className={style.logo}>SKLAD</div>
      <div className={style.categoryList}>
        <p style={{ marginLeft: -10, color: "#636363" }}>Категории</p>
        {value.map((item, index) => (
          <Category
            key={index}
            category={item}
            onRemove={(category) => {
              remove(category);
              localStorage.setItem(
                "categoryList",
                JSON.stringify({
                  value: value.filter((item) => item !== category),
                })
              );
            }}
            onClick={() => {
              setCurrentCategory(item);
            }}
            isActive={currentCategory === item}
          >
            {item}
          </Category>
        ))}
      </div>
      <div className={style.buttonsBlock}>
        <Button
          onClick={() => {
            const name = prompt("Category name:");
            add(name);
            const oldValue = localStorage.getItem("categoryList");
            if (oldValue) {
              localStorage.setItem(
                "categoryList",
                JSON.stringify({
                  value: [
                    ...JSON.parse(localStorage.getItem("categoryList")).value,
                    name,
                  ],
                })
              );
            } else {
              localStorage.setItem(
                "categoryList",
                JSON.stringify({ value: [name] })
              );
            }
          }}
        >
          Добавить категорию
        </Button>
        <Button
          style={{ marginTop: 10, width: 100 }}
          onClick={() => {
            window.localStorage.removeItem("SKLADKEY");
            router.push("/login");
          }}
        >
          {"<"} выйти
        </Button>
      </div>
    </div>
  );
};
