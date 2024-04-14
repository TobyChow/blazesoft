"use client";

import { useRef, useState } from "react";

import {
    add,
    remove,
    edit,
    selectBookList,
} from "@/lib/features/bookstore/BookStoreSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import styles from "./BookStore.module.css";
import { wrapper } from "@/lib/store";
import {
    useFetchCountQuery,
    getRunningQueriesThunk,
    fetchCount
} from "@/lib/features/bookstore/bookstoreAPI";
import BookList from "../bookList/BookList";
import BookFormModal from "../bookFormModal/BookFormModal";

export const BookStore = () => {
    const dispatch = useAppDispatch();
    const bookList = useAppSelector(selectBookList);
    const modalRef = useRef(null);
    console.log(bookList)

    const { data } = useFetchCountQuery();//todo
    console.log(data);
    

    function handleAdd() {
        modalRef.current.showModal();
    }

    return (
        <>

            <BookFormModal ref={modalRef}/>

            <BookList bookList={bookList}/>

            <button
                className={styles.button}
                aria-label="Increment value"
                onClick={handleAdd}
            >
                +
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