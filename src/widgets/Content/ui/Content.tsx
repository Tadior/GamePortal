import cls from "./Content.module.css";
import { Outlet } from "react-router-dom";
import { Menu } from "../../Menu";

export const Content = () => {
  return (
    <div className={cls.Content}>
      <div className={[cls.ContentWrapper, "container"].join(" ")}>
        <main className={cls.Main}>
          <Outlet />
        </main>
        <Menu />
      </div>
    </div>
  );
};
