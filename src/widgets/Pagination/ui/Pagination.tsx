import { useEffect, useState, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../data/store";
import { Game } from "../../../types/Game";
import { setPage } from "../../../data/slices/mainSlice";
import { GameCardList } from "../../../entites/Game";
import ReactPaginate from "react-paginate";
import cls from "./Pagination.module.css";
import { ReactComponent as ArrowRight } from "../../../assets/arrow.svg";

interface PaginationProps {
  data: Game[];
  itemsPerPage: number;
}

export const Pagination = (props: PaginationProps) => {
  const { data, itemsPerPage } = props;

  const initialPage = useAppSelector((state) => state.mainPageData.page);
  const dispatch = useAppDispatch();
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    dispatch(setPage(event.selected));
    setItemOffset(newOffset);
  };

  useEffect(() => {
    if (initialPage === 0) {
      setItemOffset(0);
    }
  }, [initialPage, itemOffset]);

  return (
    <div className={cls.Pagination}>
      <GameCardList gamesData={currentItems} />
      <ReactPaginate
        nextClassName={cls.Arrow}
        previousClassName={[cls.Arrow, cls.LeftArrow].join(" ")}
        className={cls.PaginationItems}
        pageLinkClassName={cls.PaginationItem}
        activeLinkClassName={cls.Active}
        breakLabel="..."
        forcePage={initialPage}
        nextLabel={<ArrowRight />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel={<ArrowRight />}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
