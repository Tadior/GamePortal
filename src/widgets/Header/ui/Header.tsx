import cls from "./Header.module.css";
import { Outlet, Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <header className={cls.Header}>
        <nav className={cls.Navigation}>
          <ul className={cls.List}>
            <li className={cls.Item}>
              <Link to="/">MainPage</Link>
            </li>
            <li className={cls.Item}>
              <Link to="/1">GamePage</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
