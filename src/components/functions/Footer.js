import React from 'react'

const Footer = () => {
    return (
        <footer className=" text-muted text-center">
        <hr></hr>
            <ul className="list-inline text-dark">
                <li className="list-inline-item"><i className="fab fa-facebook-square fa-2x"></i></li>
                <li className="list-inline-item"><i className="fab fa-instagram-square fa-2x"></i></li>
                <li className="list-inline-item"><i className="fab fa-twitter-square fa-2x"></i></li>
                <li className="list-inline-item"><i className="fab fa-linkedin fa-2x"></i></li>
            </ul>
            <p className="mb-1 text-dark">Copyright ©2020-2018 All rights reserved</p>
            </footer>
    )
}

export default Footer;
