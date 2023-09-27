import { ReactComponent as LoaderSVG } from "../../assets/loader.svg";
import cls from "./Loader.module.css";
export const Loader = () => {
  return (
    <div className={cls.Loader}>
      <LoaderSVG />
    </div>
  );
};
