import React from 'react';
import './_sidenav.scss';
import MePic from '../../img/me.jpg';
import { useEffect } from 'react';

export default function SidNav() {
    
    // useEffect(() => {
    //     let btn = document.getElementsByClassName('btn')[0];
    // let sidebar = document.getElementsByClassName('sidebar')[0];
    // let searchBtn = document.getElementsByClassName('bx-search')[0];

    // btn.addEventListener('click', () => {
    //     sidebar.classList.toggle('active');
    // });

    // btn.addEventListener('click', () => {
    //     sidebar.classList.toggle('active');
    // });
    // });
    
    return (
        <div className="sidebar">
            <div className="logo-content">
                <div className="logo">
                    <i className='bx bxl-c-plus-plus'></i>
                    <div className='logo-name'>CodingLab</div>
                </div>
                <i className='bx bx-menu btn'></i>
            </div>
            <ul className='nav_list'>
                <li>
                    <a href='#'>
                    <i className='bx bx-search' ></i>                        
                    <input type='text' placeholder='Search...'></input>
                    </a>
                    <span className='tooltip'>Search...</span>
                </li>
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
            <div className='profile-content'>
                <div className='profile'>
                    <div className='profile-details'>
                        <img src={MePic} alt=''></img>
                        <div className='name-job'>
                            <div className='name'>Daniel Medina</div>
                            <div className='job'>Web Designer</div>
                        </div>
                    </div>
                    <i className='bx bx-log-out' id="log-out"></i>
                </div>
            </div>

        </div>
    )
}
