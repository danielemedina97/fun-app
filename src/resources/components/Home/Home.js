import React from 'react';
import './_home.scss';
// import { useEffect } from 'react';

export default function Home() {
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

    function brgrButtonClick(event){
        let sidebar = document.getElementsByClassName('sidebar')[0];
        let homeContainer = document.getElementsByClassName('home-container')[0];
        let overlay = document.getElementsByClassName('overlay')[0];
        sidebar.classList.toggle('not-active');
        homeContainer.classList.toggle('not-active');
        overlay.classList.toggle('not-active');
    }

    function overlayClick(event) {
        let sidebar = document.getElementsByClassName('sidebar')[0];
        let homeContainer = document.getElementsByClassName('home-container')[0];
        let overlay = document.getElementsByClassName('overlay')[0];
        sidebar.classList.toggle('not-active');
        homeContainer.classList.toggle('not-active');
        overlay.classList.toggle('not-active');
    }

    function loginButtonClick(event) {
        event.preventDefault();
    }

    return (
            <div className="container home-container">
                <header>
                    <i className='bx bx-menu btn hamburger-btn hamburger-btn-home' onClick={brgrButtonClick}></i>
                    <div className='page-title'>
                        <h1>Deportivo Toluca Fan Club</h1>
                    </div>
                </header>
                <section className='home-body'>
                    <h1 className='greeting login-greeting'>Welcome</h1>
                    <form className="login-form">
                        <div className="container form-field-container email-container">
                        {/* <label htmlFor="login-email">email:</label> */}
                        <input id="login-email" name="login-email" type="text"
                        placeholder='Email or Username'></input>
                        </div>

                        <div className="container form-field-container password-container">
                        {/* <label htmlFor="login-password">password:</label> */}
                        <input id="login-password" name="login-password" type="password"
                        placeholder='Your Password'></input>
                        </div>

                        <button type='submit' name="login-submit" className="submit login-submit" onClick={loginButtonClick}>Log In</button>

                        <div className="account-help forgot-password-container">
                        <a href="https://www.youtube.com"className="account-recovery forgot-password" 
                        target={"none"}>Forgot Password?</a>
                        </div>
                        
                        <div className="account-help create-account-container">
                        <a href="https://www.youtube.com"className="account-recovery create-account" 
                        target={"none"}>Create New Account</a>
                        </div>
                    </form>
                </section>
                <footer>      
                </footer>
                <div className="overlay" onClick={overlayClick}>
                </div>   
            </div>
    )
}
