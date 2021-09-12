import React from 'react'
import './BookList.css'
const BookList = ({books,add}) => {
    return (
        books.map((book) =>{
            return(<div className="bookCard">
                <h4>{book.name}</h4>
                <p>{book.description}</p>
                <p>{book.author}</p>
                <button onClick={() => add(book.id)}>Add to Fav</button>
            </div>
            )
        })
    )
}

export default BookList
