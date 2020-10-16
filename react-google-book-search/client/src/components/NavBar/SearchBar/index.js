import React, { useState } from 'react';
import API from '../../../utils/API'
import AddBtn from '../../AddBtn';

function SearchBar({ book }) {

    var [state, setstate] = useState({
        search: "",
        results: []
    });

    var handleTyping = (e) => {
        setstate({
            ...state, search: e.target.value
        })
    }

    var handleClick = () => {
        API.searchBooks(state.search, function (data) {
            setstate({
                ...state, results: data.data.items
            })
        })
        console.log("button clicked")
    }
    const makeBook = (book) => {
        //event.preventDefault()
        console.log(`this book input ${book}`)
        API.saveBook({
            author: book.volumeInfo.author,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.previewLink,
            title: book.volumeInfo.title
        })
            .catch(err => console.log(err));
    }
    console.log(state)

    return (
        <div className="App">
            <input onChange={handleTyping} />
            <button onClick={handleClick}>Search</button>
            {state.results.map(function (book, id) {
                return (

                    <div key={id}>
                        <h1>{book.volumeInfo.title}</h1>
                        <h1>{book.volumeInfo.authors.join(", ")}</h1>
                        <p>{book.volumeInfo.description}</p>
                        <img src={book.volumeInfo.imageLinks.thumbnail} />
                        <a href={book.volumeInfo.infoLink}>More Info</a>
                        <AddBtn buttonClicked={() => makeBook(book)} className="card-body" />
                    </div>


                )

            })}


        </div>
    );
}
export default SearchBar;