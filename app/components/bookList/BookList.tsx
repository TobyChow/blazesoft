import { useRef, useState } from "react";
import Book from "../book/Book"
import BookFormModal from "../bookFormModal/BookFormModal";

export default function BookList({ bookList }) {
    const [selectedBook, setSelectedBook] = useState();
    const modalRef = useRef(null);
    
    return (
        <>
        <BookFormModal selectedBook={selectedBook} ref={modalRef}/>
        <div className="flex flex-wrap justify-center">
            {bookList.map(book => <Book key={book.id} setSelectedBook={setSelectedBook} book={book} modalRef={modalRef}/>)}
        </div>
        </>
    )
}