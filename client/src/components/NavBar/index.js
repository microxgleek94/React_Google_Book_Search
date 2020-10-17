import React from 'react'

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-start">
                <br></br>
                <a className="nav-link" href="/">Search</a>
                <br></br>
                <a className="nav-link" href="/saved">Saved</a>
            </nav>
        </div>

    );
}

export default NavBar;
