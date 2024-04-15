import {
    remove,
    selectBookList
} from "@/lib/features/bookstore/BookStoreSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { BookState } from "@/lib/features/bookstore/BookStoreSlice";

interface BookProps {
    book: BookState;
    setSelectedBook: React.Dispatch<React.SetStateAction<BookState>>;
    modalRef: React.RefObject<HTMLDialogElement>;
}

export default function Book({ book, setSelectedBook, modalRef }:BookProps) {
    const dispatch = useAppDispatch();
    const bookList = useAppSelector(selectBookList);

    function handleClick(event: React.MouseEvent<HTMLDivElement>) {
        if ((event.target as Element).classList.contains('delete-btn')) {
            event.stopPropagation();
            return;
        }
        const selectedBookId = Number(event.currentTarget.dataset.id);
        const selectedBook = bookList.filter((book:BookState) => book.id === selectedBookId)[0];
        setSelectedBook(selectedBook);

        modalRef?.current?.showModal();
    }

    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl m-2 hover:cursor-pointer" data-id={book.id} onClick={handleClick}>
                <div className="card-body">
                    <div className="card-header flex items-center">
                        <h2 className="card-title">{book.name}</h2>
                        <div className="badge badge-outline ml-2">{book.category}</div>
                        <div className="price ml-auto">${book.price}</div>
                    </div>
                    <p>{book.description}</p>
                    <div className="card-actions justify-end">
                        <button
                            className="btn delete-btn"
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