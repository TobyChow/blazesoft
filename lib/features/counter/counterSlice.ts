import type { AppThunk } from "@/lib/store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchCount, getRunningQueriesThunk } from "./counterAPI";
import {configureStore, createSlice, ThunkAction} from '@reduxjs/toolkit';
import {Action} from 'redux';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import produce from 'immer'; 

let uid = 2; // unique id for each book

export interface BookSliceState {
  id: number,
  name: string,
  price: number,
  category: string,
  description: string,
}

const initialState: BookSliceState[] = [
  {id:1, name:'harry', price:10, category:'fantsy', 'description': 'aaa'}
]

// If you are not using async thunks you can use the standalone `createSlice`.
export const counterSlice = createSlice({
  name: "booklist",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    add(state, action) {
      action.payload.id = uid++;
      state.push(action.payload)
    },
    remove(state, action) {
      return state.filter(book => book.id !== action.payload);
    },
    edit(state, action) {
      const matchedIdx = state.findIndex(booklist => booklist.id === action.payload.id);
      if (matchedIdx !== -1) state[matchedIdx] = action.payload;
    }
  },
  selectors: {
    selectBookList: (state) => state.booklist,
  },
});

// Action creators are generated for each case reducer function.
export const { add, remove, edit } = counterSlice.actions;

export const { selectBookList } = counterSlice.selectors;