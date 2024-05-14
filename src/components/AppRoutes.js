// import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
// import { Link } from 'react-router-dom';
// import Login from "./user/Login";
// import Parent from "./Parent";
// import Employee from './Employee';
// import Home from "./Home";
// import Page404 from './Page404';
// //import Menubar from "./Menubar";
// import Register from './user/Register';
// import Profile from "./user/Profile";
// import Logout from './user/Logout';
// import { useSelector } from "react-redux";
// import AdminLogin from "./admin/adminLogin";
// import ItemList from "./admin/ItemList";
// import Product from "./user/Product";
// import Cart from "./user/Cart";



// const AppRoutes = () => {

//     const loginStatus = useSelector(store => store.user.loginStatus);

//     if (!loginStatus) {
//         return (
//             <>
//                 <BrowserRouter>

//                     {/* <Menubar />
                    
//                      <Routes>
//                         <Route path="home" element={<Home />} />
//                         <Route path="emp" element={<Employee />} />
//                         <Route path="parent" element={<Parent />} />
//                         <Route path="logout" element={<Logout />} />
//                         <Route path="profile" element={<Profile />} />
//                         <Route exact path="/" element={<Home />} />
//                         <Route path="*" element={<Page404 />} />
//                     </Routes>




//                 </BrowserRouter>


//             </>
//         );
//     }
//     else {
//         return (
//             <>
//                 <BrowserRouter>
//                     <Menubar />
//                     <Routes>
//                         <Route path="home" element={<Home />} />
//                         <Route path="login" element={<Login />} />
//                         <Route path="register" element={<Register />} />
//                         <Route exact path="/" element={<Home />} />
//                         <Route path="*" element={<Page404 />} />
//                     </Routes> */}

//                     <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
//                         <div className="container-fluid">
//                             <a className="navbar-brand" >project</a>
//                             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//                                 <span className="navbar-toggler-icon"></span>
//                             </button>
//                             <div className="collapse navbar-collapse" id="navbarNavDropdown">
//                                 <ul className="navbar-nav">
//                                     <li className="nav-item">
//                                         <Link className="nav-link active" aria-current="page" to="/home">Home</Link>

//                                     </li>
//                                     <li className="nav-item">
//                                         <Link className="nav-link" to="/login" >Login</Link>
//                                     </li>
//                                     <li className="nav-item">
//                                         <Link className="nav-link" to="/admin">admin</Link>
//                                     </li>

//                                     <li className="nav-item">
//                                         <Link className="nav-link" to="/itemlist">ItemList</Link>
//                                     </li>

//                                     {/*}
//                                     <li className="nav-item">
//                                         <Link className="nav-link" to="/profile">Profile</Link>
//                                     </li>
//             */}

//                                     <li className="nav-item dropdown">

//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </nav>
//                     <Routes>
//                         <Route path="home" element={<Home />} />
//                         <Route path="login" element={<Login />} />
//                         <Route path="admin" element={<AdminLogin />} />
//                         <Route exact path="/" element={<Home />} />
//                         <Route path="itemlist" element={<ItemList />} />


//                     </Routes>
//                 </BrowserRouter>
//             </>
//         );
//     }
//     else {
//         return (
//             <>
//                 <BrowserRouter>

//                     {/*
//                 <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
//                         <div className="container-fluid">
//                             <a className="navbar-brand" >Product</a>
//                             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//                                 <span className="navbar-toggler-icon"></span>
//                             </button>
//                             <div className="collapse navbar-collapse" id="navbarNavDropdown">
//                                 <ul className="navbar-nav">
//                                     <li className="nav-item">
//                                         <Link className="nav-link active" aria-current="page" to="/home">Home</Link>

//                                     </li>
//                                     {/*
//                                     <li className="nav-item">
//                                         <Link className="nav-link" to="/login" >Login</Link>
//                                     </li>
//                                     <li className="nav-item">
//                                         <Link className="nav-link" to="/register">Register</Link>

//                                     </li>
//                                     *}
//                                      {/* <li className="nav-item">
//                                         <Link className="nav-link" to="/itemlist">ItemList</Link>
//                                     </li>  */}
//                     {/* <li className="nav-item">
//                                         <Link className="nav-link" to="*">Page404</Link>
//                                     </li> 
//                                    <li className="nav-item">
//                                         <Link className="nav-link" to="emp">Employee</Link>
//                                     </li>
//                                     {/*
//                                     <li className="nav-item">
//                                         <Link className="nav-link" to="/parent">parent</Link>
//                                     </li>
                                
//                                     <li className="nav-item">
//                                         <Link className="nav-link" to="/profile">Profile</Link>
//                                     </li>

                                    

//                                     <li className="nav-item">
//                                         <Link className="nav-link" to="/Logout">Logout</Link>
//                                     </li>
//                                 */}


//                     <nav class="navbar navbar-expand-lg bg-body-tertiary">
//                         <div className="container-fluid">
//                             <Link className="navbar-brand" to="/">Product</Link>
//                             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                                 <span className="navbar-toggler-icon"></span>
//                             </button>
//                             <div className="collapse navbar-collapse" id="navbarNav">
//                                 <ul className="navbar-nav">
//                                     <li className="nav-item">
//                                         <Link className="nav-link" to="/home">Home</Link>
//                                     </li>

//                                 </ul>
//                                 <ul className="navbar-nav ml-auto">
//                                     <li className="nav-item">
//                                         <Link className="nav-link" to="/product">Product</Link>
//                                     </li>
//                                 </ul>

//                                 {/* Code to be placed at the right side of the navbar */}
//                                 <ul className="navbar-nav ml-auto">
//                                     <li className="nav-item">
//                                         <Link className="nav-link" to="/profile">Profile</Link>
//                                     </li>
//                                 </ul>

//                                 <div className="navbar-nav ml-auto">
//                                     <li className="nav-item">
//                                         <Link className="nav-link" to="/cart">
//                                             <i className="bi bi-cart"></i> {/* Bootstrap Icons */}
//                                             {/* Or <i className="fa fa-shopping-cart"></i> if you are using FontAwesome */}
//                                         </Link>
//                                     </li>
//                                 </div>







//                             </div>
//                         </div>
//                     </nav>








//                     <Routes>
//                         <Route path="home" element={<Home />} />
//                         <Route path="login" element={<Login />} />
//                         <Route path="register" element={<Register />} />
//                         <Route exact path="/" element={<Home />} />
//                         <Route path="*" element={<Page404 />} />
//                         <Route path="parent" element={<Parent />} />
//                         <Route path="logout" element={<Logout />} />
//                         <Route path="profile" element={<Profile />} />
//                         <Route path="emp" element={<Employee />} />
//                         <Route path="product" element={<Product />} />
//                         <Route path="cart" element={<Cart />} />




//                     </Routes>
//                 </BrowserRouter>
//             </>
//         );
//     }
// };

// export default AppRoutes;








import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./user/Login";
import Parent from "./Parent";
import Employee from './Employee';
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
                                            {/* Or <i className="fa fa-shopping-cart"></i> if you are using FontAwesome */}
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
