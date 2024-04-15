"use client";

import { useRef } from "react";

import {
    add,
    selectBookList,
} from "@/lib/features/bookstore/BookStoreSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { wrapper } from "@/lib/store";
import {
    useFetchBookListQuery,
    getRunningQueriesThunk,
    fetchBookList
} from "@/lib/features/bookstore/bookstoreAPI";
import BookList from "../bookList/BookList";
import BookFormModal from "../bookFormModal/BookFormModal";
import BookForm from "../bookForm/BookForm";

export const BookStore = () => {
    const dispatch = useAppDispatch();
    const bookList = useAppSelector(selectBookList);
    const modalRef = useRef<HTMLDialogElement>(null);
    console.log(bookList)

    const { data } = useFetchBookListQuery();//todo
    console.log(data);
    

    function handleAdd() {
        modalRef?.current?.showModal();
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
            <BookFormModal ref={modalRef}>
                <BookForm modalRef={modalRef}/>
            </BookFormModal>

            <BookList bookList={bookList}/>

            
        </div>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        store.dispatch(add({id:6, name:'aaagame of thrones', price:20, category:'fantsy', 'description': 'aaa'}));

        await Promise.all(store.dispatch(getRunningQueriesThunk()));

        return {
            props: {},
        };
    }
);