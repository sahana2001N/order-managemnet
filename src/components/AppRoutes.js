
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
import React from 'react';
import UpdateProfile from "./user/UpdateProfile";

const AppRoutes = () => {
    const loginStatus = useSelector(store => store.user.loginStatus);


  


    return (
        <BrowserRouter>
            
            <nav className="navbar navbar-expand-lg bg-primary">

                <div className="container-fluid">
                    <Link className="navbar-brand" to="" style={{"color":"white"}}>Project</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home" style={{"color":"white"}}>Home</Link>
                            </li>
                            {loginStatus ? (
                                <>
                                
                                    
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/product" style={{"color":"white"}}>Product</Link>
                                    </li>
                            
                                </>
                            ) : null}
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            {loginStatus ? (
                                <>
                                    
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/cart" style={{"color":"white"}}>
                                            <i className="bi bi-cart"></i> {/* Bootstrap Icons */}
                                            {/* Or <i className="fa fa-shopping-cart"></i> if you are using FontAwesome */}
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/profile" style={{"color":"white"}}>Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/logout" style={{"color":"white"}}>Logout</Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/admin" style={{"color":"white"}}>Admin</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login" style={{"color":"white"}}>Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register" style={{"color":"white"}}>Register</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/itemlist" element={<ItemList />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/logout" element={<Logout />} />
                 <Route path="/product" element={<Product />} />
                <Route path="/cart" element={<Cart />} /> 
                <Route path="/update" element={<UpdateProfile />} /> 
                
                
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
