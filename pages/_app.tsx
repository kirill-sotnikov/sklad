import "../styles.css";
import { CategoryListProvider } from "../use-category-list";

export default function MyApp({ Component, pageProps }) {
  return (
    <CategoryListProvider>
      <Component {...pageProps} />
    </CategoryListProvider>
  );
}
