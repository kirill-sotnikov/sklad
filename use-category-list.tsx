import {
  PropsWithChildren,
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface CategoryListContextType {
  add: (newItem: string) => void;
  remove: (newItem: string) => void;
  value: Array<string>;
  currentCategory: string;
  setCurrentCategory: (value) => void;
}

const categoryListContext = createContext<CategoryListContextType>({
  add: () => {},
  remove: () => {},
  value: [],
  currentCategory: "",
  setCurrentCategory: () => {},
});

export const CategoryListProvider = memo<PropsWithChildren>(({ children }) => {
  const [value, setValue] = useState([]);
  const [currentCategory, setCurrentCategoryInner] = useState("");

  const add = useCallback<CategoryListContextType["add"]>((newItem) => {
    setValue((state) => [...state, newItem]);
  }, []);

  const remove = useCallback<CategoryListContextType["remove"]>((newItem) => {
    setValue((state) => state.filter((item) => item !== newItem));
  }, []);

  const setCurrentCategory = useCallback((value: string) => {
    setCurrentCategoryInner(value);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("categoryList")) {
      const data = JSON.parse(localStorage.getItem("categoryList"))
        .value as Array<string>;
      console.log(localStorage.getItem("categoryList"));

      setValue(data);
    }
  }, []);

  return (
    <categoryListContext.Provider
      value={{ value, add, remove, setCurrentCategory, currentCategory }}
    >
      {children}
    </categoryListContext.Provider>
  );
});

export const useCategoryList = () => useContext(categoryListContext);
