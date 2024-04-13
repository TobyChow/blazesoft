import {
    remove,
} from "@/lib/features/counter/counterSlice";
import { useAppDispatch } from "@/lib/hooks";

export default function Book({ book }) {
    const dispatch = useAppDispatch();
    return (
        <>
            <div>
                <div>{book.id}</div>
                <div>{book.name}</div>
                <div>{book.price}</div>
                <div>{book.category}</div>
                <div>{book.description}</div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(remove(book.id))}
                >
                    -
                </button>
            </div>
        </>
    )
}