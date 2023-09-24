import { Link } from "react-router-dom";
import Logo from "../../../assets/logo-footer.png";
import cls from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={cls.Footer}>
      <div className="container">
        <Link to={"/"}>
          <img className={cls.Logo} src={Logo} alt="Logo" />
        </Link>
      </div>
    </footer>
  );
};
