import { useState } from "react";
import Book from "../book/Book"

export default function BookList({ bookList, setSelectedBook }) {
    return (
        <>
        {bookList.map(book => <Book key={book.id} book={book} setSelectedBook={setSelectedBook}/>)}
        </>
    )
}