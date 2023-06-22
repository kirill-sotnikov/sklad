import Link from "next/link";
import { useEffect, useState } from "react";
import { CategoryList } from "../components/category-list/category-list";
import { Content } from "../components/content/content";

/**
 * Главная страница
 */
export const MainPage = () => {
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("SKLADKEY") === "123") {
      setIsUser(true);
    }
  }, []);

  if (!isUser) {
    return (
      <div style={{ textAlign: "center", marginTop: 30 }}>
        <Link href="login">Авторизоваться</Link>
      </div>
    );
  }

  return (
    <div style={{ display: "flex" }}>
      <CategoryList />
      <Content />
    </div>
  );
};
