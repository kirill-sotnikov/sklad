import { memo, useEffect, useState } from "react";
import { Button } from "../button/button";
import { Product, ProductProps } from "../product/product";
import { WindowRedactor } from "../window-redactor/window-redactor";
import { Window } from "../window/window";

interface ProductListProps {
  category: string;
}

/**
 * Список товаром определенной категории
 */
export const ProductList = memo<ProductListProps>(({ category }) => {
  const [productList, setProductList] = useState<Array<ProductProps>>([]);
  const [changeProduct, setChangeProduct] = useState<ProductProps>();
  const [isShowWindow, setIsShowWindow] = useState(false);
  const [isShowWindowRedactor, setIsShowWindowRedactor] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(`categoryList-${category}`)) {
      setProductList(
        JSON.parse(localStorage.getItem(`categoryList-${category}`)).value
      );
    } else {
      setProductList([]);
    }
  }, [category]);

  if (category === "") {
    return <div>Выберите категорию</div>;
  }

  return (
    <div
      style={{
        overflow: "auto",
        height: "calc(100vh - 158px)",
        paddingBottom: 200,
      }}
    >
      {changeProduct && isShowWindowRedactor && (
        <WindowRedactor
          {...changeProduct}
          onClose={() => setIsShowWindowRedactor(false)}
          onSubmit={(element) => {
            const form = new FormData(element);
            const name = form.get("name");
            const SKU = form.get("sku");
            const price = Number(form.get("price"));
            const cost = Number(form.get("cost"));
            setProductList((state) => {
              const newState = state.map((item) => {
                if (
                  item.name + item.SKU ===
                  changeProduct.name + changeProduct.SKU
                ) {
                  return { name, SKU, price, cost };
                }
                return item;
              }) as Array<ProductProps>;

              window.localStorage.setItem(
                `categoryList-${category}`,
                JSON.stringify({ value: newState })
              );

              return newState;
            });
          }}
        />
      )}
      {isShowWindow && (
        <Window
          onClose={() => setIsShowWindow(false)}
          onAdd={(element) => {
            const form = new FormData(element);
            const name = form.get("name");
            const SKU = form.get("sku");
            const price = Number(form.get("price"));
            const cost = Number(form.get("cost"));
            if (name && SKU && price && cost) {
              setProductList((state) => {
                window.localStorage.setItem(
                  `categoryList-${category}`,
                  JSON.stringify({
                    value: [
                      { name, SKU, price, cost } as ProductProps,
                      ...state,
                    ],
                  })
                );
                return [{ name, SKU, price, cost } as ProductProps, ...state];
              });
            }
          }}
        />
      )}
      {productList.map((item) => (
        <Product
          name={item.name}
          SKU={item.SKU}
          price={item.price}
          cost={item.cost}
          key={item.SKU}
          onRemove={(nameAndSKU) => {
            setProductList((state) => {
              const newState = state.filter(
                (item) => item.name + item.SKU !== nameAndSKU
              );
              window.localStorage.setItem(
                `categoryList-${category}`,
                JSON.stringify({ value: newState })
              );
              return newState;
            });
          }}
          onChange={(nameAndSKU) => {
            const item = productList.find(
              (item) => item.name + item.SKU === nameAndSKU
            );
            setChangeProduct(item);
            setIsShowWindowRedactor(true);
          }}
        />
      ))}
      <div
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          bottom: 0,
          left: 0,
          height: 70,
          backgroundColor: "white",
        }}
      >
        <Button
          style={{
            width: "600px",
          }}
          onClick={() => setIsShowWindow(true)}
        >
          Добавить продукт
        </Button>
      </div>
    </div>
  );
});

Product.displayName = "ProductList";
