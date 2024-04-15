import { useRef, useState } from "react";
import Book from "../book/Book"
import BookFormModal from "../bookFormModal/BookFormModal";

import { BookState } from "@/lib/features/bookstore/BookStoreSlice";

interface Props {
    bookList: BookState[];
}

export default function BookList({ bookList }: Props) {
    const [selectedBook, setSelectedBook] = useState<BookState | null>(null);
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