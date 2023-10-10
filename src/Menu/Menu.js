import React from "react";
import { Link } from "react-router-dom";

function Menu()
{
    return(
        <>
        <nav className="navbar navbar-expand-sm navbar-dark top-sticky">
            <div className="container-fluid">
                <a className="navbar-brand">PORTFOLIO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <Link to='/'><li className="nav-item">
                        <a className="nav-link">Home</a>
                        </li></Link>
                        <Link to='/about'><li className="nav-item">
                        <a className="nav-link">About</a>
                        </li></Link>
                        <Link to='/certificate'><li className="nav-item">
                        <a className="nav-link">Certification</a>
                        </li></Link>
                        <Link to='/skill'><li className="nav-item">
                        <a className="nav-link">Skills</a>
                        </li></Link>
                    </ul>
                    <Link to='/contact'><button type="submit" className="btn btn-success p-2 my-lg-0 my-2">Contact</button></Link>
                </div>
            </div>
        </nav>
        </>
    );
}
export default Menu; 