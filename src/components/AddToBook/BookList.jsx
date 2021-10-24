import React from 'react'
import './BookList.css'
const BookList = ({books,add, addB}) => {
    return (
        <>{
        books.map((book) =>{
            return(<div className="bookCard">
                <h4>{book.name}</h4>
                <p>{book.description}</p>
                <p>{book.author}</p>
                <button onClick={() => add(book.id)}>Add to Fav</button>
            </div>
            )
        })}
        {
            Object.keys(addB).map(function(key, index) {
                return <div>
                    <p>{addB.name}</p>
                </div>
            })
              
        }
        </>
    )
}

export default BookList
