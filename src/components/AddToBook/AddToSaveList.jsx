import React, { useState } from 'react'
import fakeData from "../../fakeData"
import BookFavorite from './BookFavorite';
import BookList from './BookList';
const AddToSaveList = () => {
    // console.log(fakeData);
    const [addToCart, setAddToCart] = useState({data: fakeData});
    const [booksFav, setBooksFav] = useState([]);
    const [addBook, setAddBook] = useState({
      name: "",
      description: "",
      author: ""
    })
    const addToFavorite = id => {
      const data =addToCart.data.find(item => item.id === id);
      setBooksFav([...booksFav, data]);
    };
    const deleteToFavorite = id => {
      const remaining = booksFav.filter(item => item.id !== id);
      setBooksFav(remaining);
      // console.log("after remove",remaining)
    };
    // console.log("favorite", booksFav);

    const addValue =(e)=>{
      let bookData = {...addBook}
      bookData[e.target.name] = e.target.value
      console.log(bookData);
      setAddBook(bookData);
    }
    const addNewBook =(e)=>{
      e.preventDefault();
      // const newData = {
      //   id: new Date().getTime(),
      //   name:addBook.name,
      //   description: addBook.description,
      //   author: addBook.author
      // }
  
      // console.log(newData)
    }
    return (
        <div className="">
            <div className="container">
              <h1 className="center">Exercise : Add Favorite Books</h1>
              <div className="row">
                <form onSubmit={addNewBook} className="col-md-4">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="name" 
                    value = {addBook.name}
                    // onChange={(e)=>setAddBook(e.target.value)}
                    onChange={addValue}
                  />
                
                  <textarea
                    type="text"
                    name="description"
                    value = {addBook.description}
                    // onChange={(e)=>setAddBook(e.target.value)}
                    onChange={addValue}
                  />
                  <input
                    type="text"
                    name="author"
                    placeholder="author"
                    value= {addBook.author}
                    // onChange={(e)=>setAddBook(e.target.value)}
                    onChange={addValue}
                  />
                  <button>add book</button>
                </form>
              </div>
            <div className="row">
              <div className="col-md-6">
                <BookList books={addToCart.data} add ={addToFavorite} addB= {addBook} />
                <hr />
              </div>
              <div className="col-md-5">
                <BookFavorite
                  favLists={booksFav}
                  remove={deleteToFavorite}
                />
              </div>
            </div>
          </div>
        </div>
    )
}

export default AddToSaveList
