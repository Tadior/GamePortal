import { useGetGamesQuery } from "../../../data/api/gamesApi";
import { useAppDispatch, useAppSelector } from "../../../data/store";
import cls from "./MainPage.module.css";
import { useEffect } from "react";
import { Pagination } from "../../../widgets/Pagination";
import { switchFiltersVisible } from "../../../data/slices/mainSlice";
import { ErrorModal, Loader } from "../../../shared";
import { useErrorStatus } from "../../../widgets/Content/ui/Content";

export const MainPage = () => {
  const category = useAppSelector((state) => state.mainPageData.category);
  const sortBy = useAppSelector((state) => state.mainPageData.sortBy);
  const dispatch = useAppDispatch();
  const { changeStatus } = useErrorStatus();

  useEffect(() => {
    dispatch(switchFiltersVisible(true));
  }, []);

  const { data, isError, isLoading } = useGetGamesQuery({
    "sort-by": sortBy,
    category: category,
  });

  if (isError) {
    changeStatus(true);
    setTimeout(() => {
      changeStatus(false);
    }, 3000);
  }

  return (
    <section className={cls.MainPage}>
      {isLoading && <Loader />}
      {data && <Pagination itemsPerPage={12} data={data} />}
    </section>
  );
};
