"use client";

import { useState } from "react";

import {
  add,
  remove,
  edit,
  selectBookList,
} from "@/lib/features/counter/counterSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import styles from "./Counter.module.css";
import { wrapper } from "@/lib/store";
import {
  useFetchCountQuery,
  getRunningQueriesThunk,
  fetchCount
} from "@/lib/features/counter/counterAPI";
import BookList from "../bookList/BookList";
import BookForm from "../bookForm/BookForm";

export const Counter = () => {
  const dispatch = useAppDispatch();
  const bookList = useAppSelector(selectBookList);
  const [selectedBook, setSelectedBook] = useState(null);

  console.log(bookList)

  function handleAdd() {
    setSelectedBook(null);
  }

  return (
    <>
      <BookForm book={selectedBook}/>

      <BookList bookList={bookList} setSelectedBook={setSelectedBook}/>

      <button
        className={styles.button}
        aria-label="Increment value"
        onClick={handleAdd}
      >
        +
      </button>

      <button
        className={styles.button}
        aria-label="Increment value"
        onClick={() => dispatch(edit({"id":1, name:'ab', price:10, category:'f', 'description':'a'}))}
      >
        e
      </button>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    store.dispatch(fetchCount.initiate());

    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);