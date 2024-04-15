import { createSlice } from '@reduxjs/toolkit';

export interface BookState {
  id: number,
  name: string,
  price: number,
  category: string,
  description: string,
}

const initialState: BookState[] = [
  {id:1, name:'harry', price:10, category:'fantsy', 'description': 'aaa'},
  {id:2, name:'game of thrones', price:20, category:'fantsy', 'description': 'aaa'},
  {id:3, name:'game of thrones', price:20, category:'fantsy', 'description': 'aaa'},
  {id:4, name:'game of thrones', price:20, category:'fantsy', 'description': 'aaa'},
  {id:5, name:'game of thrones', price:20, category:'fantsy', 'description': 'aaa'},
  {id:6, name:'game of thrones', price:20, category:'fantsy', 'description': 'aaa'},
]
let uid = initialState.length + 1; // unique id for new book entries


export const BookStoreSlice = createSlice({
  name: "booklist",
  initialState,
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

export const { add, remove, edit } = BookStoreSlice.actions;

export const { selectBookList } = BookStoreSlice.selectors;