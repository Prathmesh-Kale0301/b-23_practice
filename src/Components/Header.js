import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="#">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/variable">Variable</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="dyanamic_class">Dyanamic_Class</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Api">API</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="UserT">User_Table</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;