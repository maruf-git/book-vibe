import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Book from './Book';

const Books = props => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])
    return (
        <div className="my-10">
            <h1 className="text-5xl font-bold text-center py-5 mt-20 mb-5">Books</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    books.map((book) => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    )
}

Books.propTypes = {

}

export default Books
