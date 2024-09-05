import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import GamePage from "./pages/GamePage/GamePage";
import Layout from "./Сomponents/Layout/Layout";

function App() {
    return (
        <Router>
            <Routes>
                {/*<Route path="/" element={<HomePage />} />*/}
                <Route path="/" element={<Layout><HomePage /></Layout>}/>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/game/:id" element={<Layout> <GamePage /></Layout>} />

            </Routes>
        </Router>
    );
}

export default App;
