
import Book from "../book/Book"
export default function BookList({ bookList }) {
    return (
        <>
        {bookList.map(book => <Book key={book.id} book={book}/>)}
        </>
    )
}