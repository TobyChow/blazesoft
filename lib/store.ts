import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { BookStoreSlice } from "./features/bookstore/BookStoreSlice";
import { createWrapper } from "next-redux-wrapper";
import { api } from './features/bookstore/bookstoreAPI';

const rootReducer = combineSlices(BookStoreSlice);
export type RootState = ReturnType<typeof rootReducer>;


export const makeStore = () => {
  return configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        booklist: rootReducer,
    },

    middleware: (gDM) => gDM().concat(api.middleware),
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