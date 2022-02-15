import './Login.css';
import React from 'react';


function Login() {
    return (
        <div className="App-login">
                <p>
                Login to access the full dashboard
                </p>
                <label>Email:</label>
                <input type="text" />
                <label>Password:</label>
                <input type="password" />
                <button>OK</button>
        </div>
    )
}

export default Login;
