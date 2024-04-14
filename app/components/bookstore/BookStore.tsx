"use client";

import { useRef } from "react";

import {
    selectBookList,
} from "@/lib/features/bookstore/BookStoreSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
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
        <div className="flex flex-col items-center">
            <button
                className="btn m-auto"
                aria-label="Increment value"
                onClick={handleAdd}
            >
                Add Book
            </button>
            <BookFormModal ref={modalRef}/>

            <BookList bookList={bookList}/>

            
        </div>
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