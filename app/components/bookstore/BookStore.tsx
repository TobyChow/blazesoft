"use client";

import { useRef } from "react";
import { 
    selectBookList,
} from "@/lib/features/bookstore/BookStoreSlice";

import { useAppSelector } from "@/lib/hooks";


import BookList from "../bookList/BookList";
import Dialog from "../dialog/Dialog";
import BookForm from "../bookForm/BookForm";

export const BookStore = () => {
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
                <BookForm key={Math.random()} modalRef={modalRef}/>
            </Dialog>

            <BookList bookList={bookList}/>
        </div>
    );
};