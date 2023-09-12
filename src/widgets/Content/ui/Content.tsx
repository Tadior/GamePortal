import cls from "./Content.module.css";
import { RouterProvider, Outlet } from "react-router-dom";
import { router } from "../../../data/router";

export const Content = () => {
  return (
    <div className={cls.Content}>
      <main className={cls.Main}>
        <Outlet />
      </main>
      <aside className={cls.Menu}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        quisquam amet odit exercitationem alias reiciendis eaque unde et quas
        similique tenetur cumque explicabo, libero voluptatibus. Rem beatae
        doloremque quaerat quae.
      </aside>
    </div>
  );
};
