
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./user/Login";
import Home from "./Home";
import Page404 from './Page404';
import Register from './user/Register';
import Profile from "./user/Profile";
import Logout from './user/Logout';
import { useSelector } from "react-redux";
import AdminLogin from "./admin/adminLogin";
import ItemList from "./admin/ItemList";
import Product from "./user/Product";
import Cart from "./user/Cart";

import React, { useState } from 'react';

const AppRoutes = () => {
    const loginStatus = useSelector(store => store.user.loginStatus);


  


    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Project</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">Home</Link>
                            </li>
                            {loginStatus ? (
                                <>
                                
                                    
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/product">Product</Link>
                                    </li>
                            
                                </>
                            ) : null}
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            {loginStatus ? (
                                <>
                                    
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/cart">
                                            <i className="bi bi-cart"></i> {/* Bootstrap Icons */}
                                           Cart
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/profile">Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/logout">Logout</Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/admin">Admin</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register">Register</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/itemlist" element={<ItemList />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/logout" element={<Logout />} />
                 <Route path="/product" element={<Product />} />
                <Route path="/cart" element={<Cart />} /> 
                <Route path="*" element={<Page404 />} />
                
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
