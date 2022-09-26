import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

function Portal() {
    return (
        <div id="wrapper">
            <Sidebar></Sidebar>
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <Topbar></Topbar>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Portal;