import { forwardRef, useEffect } from "react";
import BookForm from "../bookForm/BookForm";

const BookFormModal = forwardRef(function BookFormModal({ selectedBook }, ref) {
    return (
        <dialog ref={ref} className="modal">
            <div className="modal-box">
                <BookForm key={Math.random()} book={selectedBook} modalRef={ref}/>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
});

export default BookFormModal;


