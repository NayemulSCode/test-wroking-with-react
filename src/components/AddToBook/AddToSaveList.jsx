import React, { useState } from 'react'
import fakeData from "../../fakeData"
import BookFavorite from './BookFavorite';
import BookList from './BookList';
const AddToSaveList = () => {
    console.log(fakeData);
    const [addToCart, setAddToCart] = useState({
        data: fakeData,
        isloading: false
    });
    const [booksFav, setBooksFav] = useState([]);
    const addToFavorite = id => {
      const data =addToCart.data.find(item => item.id === id);
      setBooksFav([...booksFav, data]);
    };
    const deleteToFavorite = id => {
      const remaining = booksFav.filter(item => item.id !== id);
      setBooksFav(remaining);
      console.log("after remove",remaining)
    };
    console.log("favorite", booksFav);
    return (
        <div className="">
            <div className="container">
            <h1 className="center">Exercise : Add Favorite Books</h1>
            {/* <input /> */}
            <div className="row">
              <div className="col-md-6">
                <BookList books={addToCart.data} add ={addToFavorite}  />
                <hr />
              </div>
              <div className="col-md-5">
                <BookFavorite
                  favLists={booksFav}
                  remove={deleteToFavorite}
                />
              </div>
              <div>
                <button load={addToCart.isloading} />
              </div>
            </div>
          </div>
        </div>
    )
}

export default AddToSaveList
