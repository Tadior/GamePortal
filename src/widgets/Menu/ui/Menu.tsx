import { CATEGORIES, CategoriesType } from "../../../consts/CATEGORIES";
import { SORT_BY, SortByType } from "../../../consts/SORT_BY";
import {
  setCategory,
  setPage,
  setSortBy,
} from "../../../data/slices/mainSlice";
import { useAppDispatch, useAppSelector } from "../../../data/store";
import cls from "./Menu.module.css";
import { MenuList } from "./MenuList/ui/MenuList";
import goBackImage from "../../../assets/go-back.png";
import { useNavigate } from "react-router-dom";

export const Menu = () => {
  const category = useAppSelector((state) => state.mainPageData.category);
  const sortBy = useAppSelector((state) => state.mainPageData.sortBy);
  const isVisible = useAppSelector(
    (state) => state.mainPageData.isFiltersVisible
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const changeCategory = (value: CategoriesType) => {
    dispatch(setPage(0));
    dispatch(setCategory(value));
  };

  const ChangeSortBy = (value: SortByType) => {
    dispatch(setSortBy(value));
  };

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <aside className={cls.Menu}>
      <div className={cls.MenuWrapper}>
        {isVisible ? (
          <>
            <div className={cls.Title}>Category</div>
            <MenuList
              currentValue={category}
              optionsData={CATEGORIES}
              callback={changeCategory}
            />
            <div className={cls.Title}>Sort by</div>
            <MenuList
              currentValue={sortBy}
              optionsData={SORT_BY}
              callback={ChangeSortBy}
            />{" "}
          </>
        ) : (
          <button className={cls.BackButton} onClick={handleClick}>
            <img src={goBackImage} alt="Go back" />
          </button>
        )}
      </div>
    </aside>
  );
};
