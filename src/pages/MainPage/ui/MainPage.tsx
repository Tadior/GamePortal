import { useGetGamesQuery } from "../../../data/api/gamesApi";
import { useAppDispatch, useAppSelector } from "../../../data/store";
import { useEffect, useState } from "react";
import { Game } from "../../../types/Game";
import cls from "./MainPage.module.css";
import { GameCardList } from "../../../entites/Game";
import { GameCardListLoader } from "../../../entites/Game/ui/GameCardListLoader";
import ReactPaginate from "react-paginate";
import { setPage } from "../../../data/slices/mainSlice";
import { Pagination } from "../../../widgets/Pagination";

export const MainPage = () => {
  const category = useAppSelector((state) => state.mainPageData.category);
  const sortBy = useAppSelector((state) => state.mainPageData.sortBy);

  const { data, error, isLoading } = useGetGamesQuery({
    "sort-by": sortBy,
    category: category,
  });
  if (isLoading) {
    console.log("LOADING");
  }

  if (isLoading) {
    return (
      <div className="">
        <>LOADING</>
      </div>
    );
  }
  if (error) {
    console.log(error);
  }

  return (
    <section className={cls.MainPage}>
      {data && <Pagination itemsPerPage={12} data={data} />}
    </section>
  );
};
