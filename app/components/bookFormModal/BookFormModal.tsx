import { forwardRef } from "react";
import BookForm from "../bookForm/BookForm";
import { BookState } from "@/lib/features/bookstore/BookStoreSlice";

interface Props {
    children: React.ReactNode;
}

const BookFormModal = forwardRef<HTMLDialogElement, Props>(function BookFormModal({ children }, ref) {
    return (
        <dialog ref={ref} className="modal">
            <div className="modal-box">
                {children}
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
});

export default BookFormModal;


