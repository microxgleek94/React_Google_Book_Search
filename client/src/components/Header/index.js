import React from 'react'

function Header(){
    return (
        <div className="container">
            <div className="row">
                <div className="col border border-secondary mb-5">
                    <h1 className="text-center">Google Book Search</h1>
                    <h3 className="text-center">Search for your favorite books below!</h3>
                </div>
            </div>
        </div>
    );
}

export default Header;