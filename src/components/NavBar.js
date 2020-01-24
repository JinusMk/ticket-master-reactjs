import React from 'react'
import { withRouter, Link } from 'react-router-dom'

function NavBar(props){
    return(
        <nav className="navbar navbar-light bg-light">
            <div className="row" style={{width: '100%'}}>
                    <div className="col-md-4">
                        <Link className="navbar-brand" to="/home">
                            <img src="https://media.cdnandroid.com/7c/f3/71/e0/imagen-ticketmaster-ticker-0thumb.jpg" width="30" height="30" className="d-inline-block align-top" alt="" />
                            Ticket Master
                        </Link>
                    </div>
                    <div className="col-md-8">
                        <ul className="navbar-nav">
                            <li className={`nav-item ${props.location.pathname === '/home' || props.location.pathname === '/' ? 'active' : ''}`}>
                                <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className={`nav-item ${props.location.pathname === '/tickets/new' ? 'active' : ''}`}>
                                <Link className="nav-link" to="/tickets/new">New Ticket</Link>
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>
    )
}
export default withRouter(NavBar)