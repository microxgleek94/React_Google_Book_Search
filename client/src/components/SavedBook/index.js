import React from 'react';


function SavedBook({ book, deleteBook }) {

    return (
        <li>
            <div className="container">
                <div className="col">
                    <div className="card">
                        <div className="card-header"></div>
                        <h1 className="card-body"> {book.title}</h1>
                        <h2>{book.author}</h2>
                        <img src={book.image} />
                        <p>{book.description}</p>
                        <a href={book.link} target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">
                                View  <i className="fas fa-external-link-alt"></i>
                            </button>
                        </a>
                        <button type="button" className="btn btn-primary" onClick={() => deleteBook(book._id)}>Delete <i className="far fa-trash-alt"></i></button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default SavedBook