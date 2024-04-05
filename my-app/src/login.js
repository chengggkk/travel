import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from './register.js';


function Login() {
    const handleDropdownClick = () => {
        const dropdownContent = document.querySelector('.dropdown-content');
        dropdownContent.style.display = dropdownContent.style.display === 'none' ? 'block' : 'none';
    };

    return (
        <div className='login-container'>
            <input type="text" className='address' placeholder="Address" />
            <input type="password" className='password' placeholder="Password" />            
            <Router>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/register.js" element={
                        <Link to="/register.js">
                            <button>Go to Register</button>
                        </Link>
                    } />
                </Routes>
            </Router>
        </div>
    );
}

export default Login;