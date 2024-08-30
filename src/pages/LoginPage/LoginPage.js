
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.scss';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === 'adil' && password === '0000') {
            localStorage.setItem('token', 'fake-jwt-token');
            navigate('/home');
        } else {
            alert('Invalid login credentials');
        }
    };

    return (

        <div className={'body-login-page'}>
            <div className="login-container">
                <form className="login-form" onSubmit={handleLogin}>
                    <h2>Log in </h2>
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Sign in</button>
                    <p>Don't have an account? <a href="/register">Sign up now</a></p>
                </form>
            </div>
        </div>

    );
}

export default LoginPage;
