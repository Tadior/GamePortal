import cls from "./Header.module.css";
import { Outlet, Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
export const Header = () => {
  return (
    <>
      <header className={cls.Header}>
        <div className="container">
          <div className={cls.HeaderWrapper}>
            <div className={cls.Logo}>
              <Link to="/">
                <img className={cls.LogoImg} src={Logo} alt="Logo" />
              </Link>
            </div>
            <nav className={cls.Navigation}>
              <ul className={cls.List}>
                <li className={cls.Item}>
                  <Link className={cls.Link} to="/">
                    Catalog
                  </Link>
                </li>
                {/* <li className={cls.Item}>
                <Link to="/1">GamePage</Link>
              </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
