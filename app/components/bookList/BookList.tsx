import { useRef, useState } from "react";
import Book from "../book/Book"
import Dialog from "../dialog/Dialog";

import { BookState } from "@/lib/features/bookstore/BookStoreSlice";
import BookForm from "../bookForm/BookForm";

interface Props {
    bookList: BookState[];
}

export default function BookList({ bookList }: Props) {
    const [selectedBook, setSelectedBook] = useState<BookState>({}  as BookState);
    const modalRef = useRef(null);
    
    return (
        <>
        <Dialog ref={modalRef}>
            <BookForm key={Math.random()} book={selectedBook} modalRef={modalRef}/>
        </Dialog>
        <div className="flex flex-wrap">
            {bookList.map(book => <Book key={book.id} setSelectedBook={setSelectedBook} book={book} modalRef={modalRef}/>)}
        </div>
        </>
    )
}