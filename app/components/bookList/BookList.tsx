import { useRef, useState } from "react";
import Book from "../book/Book"
import BookFormModal from "../bookFormModal/BookFormModal";

export default function BookList({ bookList }) {
    const [selectedBook, setSelectedBook] = useState(null);
    const modalRef = useRef(null);
    
    return (
        <>
        <BookFormModal selectedBook={selectedBook} setSelectedBook={setSelectedBook} ref={modalRef}/>
        <div className="flex flex-wrap">
            {bookList.map(book => <Book key={book.id} setSelectedBook={setSelectedBook} book={book} modalRef={modalRef}/>)}
        </div>
        </>
    )
}