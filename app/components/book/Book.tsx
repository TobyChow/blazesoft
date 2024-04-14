import {
    remove,
    selectBookList
} from "@/lib/features/bookstore/BookStoreSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export default function Book({ book, setSelectedBook, modalRef }) {
    const dispatch = useAppDispatch();
    const bookList = useAppSelector(selectBookList);

    function handleClick(event) {
        if (event.target.classList.contains('delete-btn')){
            event.stopPropagation();
            return;
        } 
        const selectedBookId = event.currentTarget.dataset.id;
        const selectedBook = bookList.filter(book => book.id == selectedBookId)[0];
        setSelectedBook(selectedBook);
        console.log(selectedBook);
        
        modalRef.current.showModal();
    }

    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl m-2 hover:cursor-pointer" data-id={book.id}  onClick={handleClick}>
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