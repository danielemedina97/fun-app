import React from 'react';
import './_home.scss';

export default function Home() {
    const html = document.getElementsByTagName('html')[0];
    html.style.height = '100%';
    html.style.display = 'flex';

    const body = document.getElementsByTagName('body')[0];
    body.style.height = "100%";
    body.style.width = "100%";

    const root = document.getElementById('root');
    root.style.height = "100%";
    root.style.width = "100%";



    return (
        <div className="container home-container">
            <header>
                <div>
                <h1>Deportivo Toluca</h1>
                <h1>Fan Club</h1>
                </div>
            </header>
            <section className='home-body'>
                <h1 class='greeting login-greeting'>Welcome</h1>
                <form className="login-form">
                    <div className="container form-field-container email-container">
                    {/* <label htmlFor="login-email">email:</label> */}
                    <input id="login-email" name="login-email" type="text"
                    placeholder='Email or Username'></input>
                    </div>

                    <div className="container form-field-container password-container">
                    {/* <label htmlFor="login-password">password:</label> */}
                    <input id="login-password" name="login-password" type="text"
                    placeholder='Your Password'></input>
                    </div>

                    <button type='submit' name="login-submit">Log In</button>

                    <div class="account-help forgot-password-container">
                    <a href="https://www.youtube.com"class="account-recovery forgot-password" 
                    target={"none"}>Forgot Password?</a>
                    </div>
                    
                    <div class="account-help create-account-container">
                    <a href="https://www.youtube.com"class="account-recovery create-account" 
                    target={"none"}>Create New Account</a>
                    </div>
                </form>
            </section>
            <footer>
                    
            </footer>
        </div>
    )
}
