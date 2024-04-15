"use client";

import { useRef } from "react";
import { 
    add,
    selectBookList,
} from "@/lib/features/bookstore/BookStoreSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { wrapper } from "@/lib/store";

import BookList from "../bookList/BookList";
import Dialog from "../dialog/Dialog";
import BookForm from "../bookForm/BookForm";

export const BookStore = () => {
    const dispatch = useAppDispatch();
    const bookList = useAppSelector(selectBookList);
    const modalRef = useRef<HTMLDialogElement>(null);

    function handleAdd() {
        modalRef?.current?.showModal();
    }

    return (
        <div className="flex flex-col items-center pt-5">
            <button
                className="btn m-auto"
                aria-label="Increment value"
                onClick={handleAdd}
            >
                Add Book
            </button>
            <Dialog ref={modalRef}>
                <BookForm modalRef={modalRef}/>
            </Dialog>

            <BookList bookList={bookList}/>

            
        </div>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        return {
            props: {},
        };
    }
);