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

export const Menu = () => {
  const category = useAppSelector((state) => state.mainPageData.category);
  const sortBy = useAppSelector((state) => state.mainPageData.sortBy);
  const dispatch = useAppDispatch();

  const changeCategory = (value: CategoriesType) => {
    dispatch(setPage(0));
    dispatch(setCategory(value));
  };

  const ChangeSortBy = (value: SortByType) => {
    dispatch(setSortBy(value));
  };

  return (
    <aside className={cls.Menu}>
      <div className={cls.MenuWrapper}>
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
        />
      </div>
    </aside>
  );
};
