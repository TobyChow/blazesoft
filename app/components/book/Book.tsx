import {
    remove,
    selectBookList
} from "@/lib/features/bookstore/BookStoreSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useState } from "react";
import BookForm from "../bookForm/BookForm";

export default function Book({ book, setSelectedBook, modalRef }) {
    const dispatch = useAppDispatch();
    const bookList = useAppSelector(selectBookList);
    
    function handleClick(event) {
        const selectedBookId = event.currentTarget.dataset.id;
        const selectedBook = bookList.filter(book => book.id == selectedBookId)[0];
        setSelectedBook(selectedBook);
        modalRef.current.showModal();
    }
    
    return (
        <>
            <div data-id={book.id} onClick={handleClick}>
                <div>{book.id}</div>
                <div>{book.name}</div>
                <div>{book.price}</div>
                <div>{book.category}</div>
                <div>{book.description}</div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(remove(book.id))}
                >
                    -
                </button>
            </div>
        </>
    )
}