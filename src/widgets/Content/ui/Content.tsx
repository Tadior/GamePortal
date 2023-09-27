import cls from "./Content.module.css";
import { Outlet, useOutletContext } from "react-router-dom";
import { Menu } from "../../Menu";
import { useState } from "react";
import { ErrorModal } from "../../../shared";

type ContextType = {
  errorStatus: boolean;
  changeStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Content = () => {
  const [errorStatus, setErrorStatus] = useState<boolean>(false);
  return (
    <div className={cls.Content}>
      <div className={[cls.ContentWrapper, "container"].join(" ")}>
        <main className={cls.Main}>
          <Outlet context={errorStatus} />
        </main>
        <Menu />
      </div>
      <ErrorModal status={errorStatus} callback={setErrorStatus} />
    </div>
  );
};

export const useErrorStatus = () => {
  return useOutletContext<ContextType>();
};
