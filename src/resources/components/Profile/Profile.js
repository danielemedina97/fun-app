import React from 'react';
import './_profile.scss';
// import { useEffect } from 'react';

export default function Profile() {
    // useEffect(() => {
    //     let brgrBtnHome = document.getElementsByClassName('hamburger-btn-home')[0];
    //     let sidebar = document.getElementsByClassName('sidebar')[0];
    //     let homeContainer = document.getElementsByClassName('home-container')[0];
    //     let overlay = document.getElementsByClassName('overlay')[0];

    //     brgrBtnHome.addEventListener('click', () => {
    //         sidebar.classList.toggle('not-active');
    //         homeContainer.classList.toggle('not-active');
    //         overlay.classList.toggle('not-active');
    //     });

    //     overlay.addEventListener('click', () => {
    //         sidebar.classList.toggle('not-active');
    //         homeContainer.classList.toggle('not-active');
    //         overlay.classList.toggle('not-active');
    //     });


        
    // });

    // function brgrButtonClick(event){
    //     let sidebar = document.getElementsByClassName('sidebar')[0];
    //     let homeContainer = document.getElementsByClassName('home-container')[0];
    //     let overlay = document.getElementsByClassName('overlay')[0];
    //     sidebar.classList.toggle('not-active');
    //     homeContainer.classList.toggle('not-active');
    //     overlay.classList.toggle('not-active');
    // }

    // function overlayClick(event) {
    //     let sidebar = document.getElementsByClassName('sidebar')[0];
    //     let homeContainer = document.getElementsByClassName('home-container')[0];
    //     let overlay = document.getElementsByClassName('overlay')[0];
    //     sidebar.classList.toggle('not-active');
    //     homeContainer.classList.toggle('not-active');
    //     overlay.classList.toggle('not-active');
    // }

    // function loginButtonClick(event) {
    //     event.preventDefault();
    // }

    return (
            <div className="container home-container">
                <header>
                    <i className='bx bx-menu btn hamburger-btn hamburger-btn-home' 
                    // onClick={brgrButtonClick}
                    ></i>
                    <div className='page-title'>
                        <h1>Deportivo Toluca Fan Club</h1>
                    </div>
                </header>
                <section className='home-body'>
                    
                </section>
                <footer>      
                </footer>
                <div className="overlay" 
                // onClick={overlayClick}
                >
                </div>   
            </div>
    )
}
