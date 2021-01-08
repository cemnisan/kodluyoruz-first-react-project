import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="ms-auto">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 fw-bolder">
                                <li className="nav-item">
                                    <Link className="nav-link active me-2" aria-current="page" to="/">Works</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link me-2" to="/blog" style={{color: "#020202"}}>Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link me-5" to="/contact" style={{color: "#020202"}}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;