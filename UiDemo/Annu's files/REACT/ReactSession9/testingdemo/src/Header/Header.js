import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
export default function () {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <a data-testid="brandname" className="navbar-brand" href="#">Contact Manager</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="" className='linkpage'>Home</a>
                        </li>
                        <li className="nav-item">
                        <a  href="" className='linkpage'>Add Contact</a>
                            
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <a href="" className='linkpage'>Register</a>
                        </li>
                        <li className="nav-item">
                        <a href="" className='linkpage'>Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
