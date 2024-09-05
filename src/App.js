import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SignInPage from "./pages/SignInPage";
import GamePage from "./pages/GamePage/GamePage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/sign-in" element={<SignInPage />} />
                <Route path="/game/:id" element={<GamePage />} />

            </Routes>
        </Router>
    );
}

export default App;
