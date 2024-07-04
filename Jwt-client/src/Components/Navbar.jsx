import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Home</Link>

                    <div>
                        <ul className="navbar-nav me-auto  mb-md-0">
                            <li className="nav-item active ">
                                <Link to="/login" className="nav-link text-light pr-3">Login</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/" className="nav-link text-light pr-3">Register</Link>
                            </li>
                        </ul>
                    </div>
                    {/* <div> */}
                    {/* <li className="nav-item active">
                                <Link to="/" className="nav-link text-light pr-3">Logout</Link>
                            </li> */}
                    {/* </div> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar