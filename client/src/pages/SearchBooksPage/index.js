import React, { useState } from 'react'
import API from "../../utils/API.js";
import AddBtn from "../../components/AddBtn"

function SearchBooksPage({ book }) {
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
        API.search(state.search, function (data) {
            setstate({
                ...state, results: data.data.items
            })
        })
    }
    const makeBook = (book) => {
        console.log("This is the user's search input:" + JSON.parse(JSON.stringify(book)))
        API.saveBook({
            author: book.volumeInfo.author,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.previewLink,
            title: book.volumeInfo.title
        })
         .catch(err => console.log(err));
    }

    return (
        <div>

            <input onChange={handleTyping} />
            <button onClick={handleClick}>Search</button>
            {state.results.map(function (book, id) {
                return (

                    <div key={id}>
                        <div className="card mb-3">
                            <div className="card-header text-right">
                                <AddBtn buttonClicked={() => makeBook(book)} className="card-body" id={book.id}></AddBtn>
                            </div>
                            <div className="row no-gutters">
                                <div className="col">
                                    <img src={book.volumeInfo.imageLinks.thumbnail} className="img-thumbnail"
                                        style={{ width: 'auto', height: '300px' }} alt="Book" />
                                </div>
                                <div className="col">
                                    <div className="card-body">
                                        <h4 className="card-title"><a href={book.volumeInfo.infoLink}>
                                            {book.volumeInfo.title}</a></h4>
                                        <h5 className="card-title">{`Written by: ${book.volumeInfo.authors.join(", ")}`}</h5>
                                        <p className="card-text">{book.volumeInfo.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                )

            })}


        </div>

    );
}

export default SearchBooksPage;
