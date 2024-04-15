import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface BookState {
  id: number,
  name: string,
  price: number,
  category: string,
  description: string,
}

const initialState: BookState[] = [
  {id:1, name:'Harry Potter', price:10, category:'Fantasy', 'description': 'Yer a Wizard'},
  {id:2, name:'Game Of Thrones', price:20, category:'Fantasy', 'description': 'The best four seasons of TV'},
  {id:3, name:'Dune', price:40, category:'Fantasy', 'description': 'Worms and sand'},
  {id:4, name:'React For Dummies', price:30, category:'LifeStyle', 'description': 'I need this'},
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
  extraReducers: (builder) => {
    builder
        .addCase(HYDRATE, (state, action) => {
            state.push(action.payload)
        })

  },
  selectors: {
    selectBookList: (state) => state.booklist,
  },
});

export const { add, remove, edit } = BookStoreSlice.actions;

export const { selectBookList } = BookStoreSlice.selectors;