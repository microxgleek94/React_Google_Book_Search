import React, { useEffect, useState } from 'react';
import API from "../../utils/API";
import SavedBook from '../../components/SavedBook';
import SavedBooksHeader from "../../components/Header/SavedPageHeader"

function SavedBooksPage(book) {
    const [bookSave, setBooks] = useState([])

    useEffect(() => {
        loadBooks()
    }, [])

    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }

    function loadBooks() {
        API.getBooks()
            .then(res =>
                setBooks(res.data)
            )
            .catch(err => console.log(err));
    };


    console.log("this is booksave", bookSave)

    return (
        <div className="container" >
            <section className="row border border-secondary p-3">
                <div className="col">
                    <div className="card">
                        <div></div>
                        <div className="card-header">
                            <SavedBooksHeader />
                        </div>
                        <div  className="card-body">
                            {bookSave.length !== 0 ? (<ul>{bookSave.map(book => (
                                <SavedBook
                                    book={book}
                                    deleteBook={deleteBook}
                                ></SavedBook>
                            ))}
                            </ul>) : (<h1>No saved books!</h1>
                                )}
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default SavedBooksPage;