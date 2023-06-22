import { useRouter } from "next/router";
import { Button } from "../components/button/button";

/**
 * Страница авторизации
 */
export const Login = () => {
  const route = useRouter();
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        paddingBottom: 100,
      }}
    >
      <form
        action=""
        onSubmit={(event) => {
          event.preventDefault();
          const form = new FormData(event.currentTarget);
          if (form.get("login") === "sklad" && form.get("password") === "123") {
            window.localStorage.setItem("SKLADKEY", "123");
            route.push("/");
          }
        }}
      >
        <h1>Login page</h1>
        <div>
          <p>login</p>
          <input type="text" name="login" />
        </div>
        <div style={{ marginTop: 20 }}>
          <p>password</p>
          <input type="password" name="password" />
        </div>
        <Button type="submit" style={{ marginTop: 20 }}>
          GO
        </Button>
      </form>
    </div>
  );
};
