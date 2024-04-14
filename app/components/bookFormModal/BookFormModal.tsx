import { forwardRef } from "react";
import BookForm from "../bookForm/BookForm";

const BookFormModal = forwardRef(function BookFormModal({ selectedBook, setSelectedBook=null }, ref) {
    const mode = selectedBook ? 'Edit' : 'Add';

    function handleClose() {
        if (setSelectedBook) setSelectedBook(null)
    }

    return (
        <dialog ref={ref} className="modal" onClose={handleClose}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">{mode} Book</h3>
                <BookForm key={Math.random()} book={selectedBook} modalRef={ref}/>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
});

export default BookFormModal;


