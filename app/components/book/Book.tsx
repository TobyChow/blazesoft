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
            <div className="card w-96 bg-base-100 shadow-xl m-2" data-id={book.id}  onClick={handleClick}>
                <div className="card-body">
                    <div className="card-header flex items-center">
                        <h2 className="card-title">{book.name}</h2>
                        <div className="badge badge-outline">{book.category}</div>
                        <div className="price ml-auto">${book.price}</div>
                    </div>
                    <p>{book.description}</p>
                    <div className="card-actions justify-end">
                        <button 
                            className="btn"
                            aria-label="delete book"
                            onClick={() => dispatch(remove(book.id))}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}