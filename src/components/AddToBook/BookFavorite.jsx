import React from 'react'

const BookFavorite = ({favLists, remove}) => {
    return (
        favLists.map((book)=>{
            return(<div>
                    <h4>{book.name}</h4>
                    <p>{book.description}</p>
                    <p>author: {book.author}</p>
                    <button onClick={() => remove(book.id)}>Remove From List</button>
                </div>
            )}
        )
    )
}

export default BookFavorite
