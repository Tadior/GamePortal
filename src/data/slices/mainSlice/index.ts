import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Game } from "../../../types/Game";
import { CATEGORIES, CategoriesType } from "../../../consts/CATEGORIES";
import { SORT_BY, SortByType } from "../../../consts/SORT_BY";

export interface mainState {
  games: Game[];
  page: number;
  category: CategoriesType;
  sortBy: SortByType;
  isFiltersVisible: boolean;
}

const initialState: mainState = {
  games: [],
  page: 0,
  category: CATEGORIES[0],
  sortBy: SORT_BY[0],
  isFiltersVisible: true,
};

export const mainSlice = createSlice({
  name: "mainPage",
  initialState,
  reducers: {
    setGames: (state, action: PayloadAction<Game[]>) => {
      state.games = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setCategory: (state, action: PayloadAction<CategoriesType>) => {
      state.category = action.payload;
    },
    setSortBy: (state, action: PayloadAction<SortByType>) => {
      state.sortBy = action.payload;
    },
    switchFiltersVisible: (state, action: PayloadAction<boolean>) => {
      state.isFiltersVisible = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setGames,
  setPage,
  setCategory,
  setSortBy,
  switchFiltersVisible,
} = mainSlice.actions;

export default mainSlice.reducer;
