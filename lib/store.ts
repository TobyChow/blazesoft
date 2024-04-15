import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { BookStoreSlice } from "./features/bookstore/BookStoreSlice";
import { createWrapper } from "next-redux-wrapper";

const rootReducer = combineSlices(BookStoreSlice);
export type RootState = ReturnType<typeof rootReducer>;


export const makeStore = () => {
  return configureStore({
    reducer: {
        booklist: rootReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore, {debug:true})