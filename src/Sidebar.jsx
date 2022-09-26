import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaughWink,faTachometerAlt } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
               
                 <FontAwesomeIcon className="fas fa-3x fa-laugh-wink" icon={faLaughWink} /> 
                  
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/dashboard">
                <FontAwesomeIcon className="fas mx-2 fa-1x fa-fw fa-tachometer-alt" icon={faTachometerAlt} />
                   
                    <span>Dashboard</span></Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Interface
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/users">
                <FontAwesomeIcon className="fas mx-2 fa-1x fa-fw fa-tachometer-alt" icon={faTachometerAlt} />
                    <span>Users</span>
                    </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/products">
                <FontAwesomeIcon className="fas mx-2 fa-1x fa-fw fa-tachometer-alt" icon={faTachometerAlt} />
                    <span>Products</span></Link>
            </li>
            <hr className="sidebar-divider" />
        </ul>
    )
}

export default Sidebar;
