import { forwardRef } from "react";

interface Props {
    children: React.ReactNode;
}

const Dialog = forwardRef<HTMLDialogElement, Props>(function Dialog({ children }, ref) {
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

export default Dialog;


