import React from 'react';
import './_sidenav.scss';
import MePic from '../../img/me.jpg';
import { useEffect } from 'react';

export default function SidNav() {
    
    useEffect(() => {
        let brgrBtnSidenav = document.getElementsByClassName('hamburger-btn-sidenav')[0];
        let sidebar = document.getElementsByClassName('sidebar')[0];
        let searchBtn = document.getElementsByClassName('bx-search')[0];
        let homeContainer = document.getElementsByClassName('home-container')[0];
        let overlay = document.getElementsByClassName('overlay')[0];

        brgrBtnSidenav.addEventListener('click', () => {
            sidebar.classList.toggle('not-active');
            homeContainer.classList.toggle('not-active');
            overlay.classList.toggle('not-active');

        });

        searchBtn.addEventListener('click', () => {
            sidebar.classList.toggle('not-active');
            homeContainer.classList.toggle('not-active');
            overlay.classList.toggle('not-active');
        });

        // btn.addEventListener('click', () => {
        //     sidebar.classList.toggle('active');
        // });
    });

    
    return (
        <div className="sidebar not-active">
            <div className="logo-content">
            <i className='bx bx-menu btn hamburger-btn hamburger-btn-sidenav'></i>
                <div className="logo">
                    <i className='bx bxl-c-plus-plus'></i>
                    <div className='logo-name'>TFC</div>
                </div>
            </div>
            <div id="search-bar">
                <a href='#'>
                    <i className='bx bx-search' ></i>                        
                    <input type='text' placeholder='Search...'></input>
                </a>
                <span className='tooltip'>Search...</span>
            </div>
            <ul className='nav-list'>
                {/* <li id="search-bar">
                    <a href='#'>
                        <i className='bx bx-search' ></i>                        
                        <input type='text' placeholder='Search...'></input>
                    </a>
                    <span className='tooltip'>Search...</span>
                </li> */}
                <li>
                    <a href='#'>
                        <i className='bx bxs-grid-alt'></i>
                        <span className='links-name'>Dashboard</span>
                    </a>
                    <span className='tooltip'>Dashboard</span>
                </li>
                <li>
                    <a href='#'>
                        <i className='bx bx-user' ></i>
                        <span className='links-name'>User</span>
                    </a>
                    <span className='tooltip'>User</span>
                </li>
                <li>
                    <a href='#'>
                        <i className='bx bx-chat' ></i>
                        <span className='links-name'>Messages</span>
                    </a>
                    <span className='tooltip'>Messages</span>
                </li>
                <li>
                    <a href='#'>
                        <i className='bx bx-pie-chart-alt-2' ></i>
                        <span className='links-name'>Analytics</span>
                    </a>
                    <span className='tooltip'>Analytics</span>
                </li>
                <li>
                    <a href='#'>
                        <i className='bx bx-folder' ></i>
                        <span className='links-name'>File Manager</span>
                    </a>
                    <span className='tooltip'>File Manager</span>
                </li>
                <li>
                    <a href='#'>
                        <i className='bx bx-cart' ></i>
                        <span className='links-name'>Order</span>
                    </a>
                    <span className='tooltip'>Order</span>
                </li>
                <li>
                    <a href='#'>
                        <i className='bx bx-heart' ></i>
                        <span className='links-name'>Saved</span>
                    </a>
                    <span className='tooltip'>Saved</span>
                </li>
                <li>
                    <a href='#'>
                        <i className='bx bx-cog' ></i>
                        <span className='links-name'>Settings</span>
                    </a>
                    <span className='tooltip'>Settings</span>
                </li>
            </ul>
        </div>
    )
}
