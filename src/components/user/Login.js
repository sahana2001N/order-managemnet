import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/UserSlice";

const Login = () => {

    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [afterSubmit, setAfterSubmit] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setLoginData({
            ...loginData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleLoginSubmit = (evt) => {
        evt.preventDefault();
        console.log(loginData);
        UserService.loginUser(loginData)
            .then((response) => {
                console.log(response);
                setAfterSubmit(`Hi ${loginData.username}! You've logged in successfully!`);
                setTimeout(() => {
                    setLoginData({ username: '', password: '' });
                    dispatch(userLogin(response));
                    navigate('/home');
                }, 2000);
            })
            .catch((error) => {
                console.log(error);
                setLoginData({ username: '', password: '' });
                setAfterSubmit(`Invalid credentials!`);
            });
    };

    return (
        <>

<<<<<<< HEAD
=======
            {/* <h1>Login Component</h1>
            <p>Login here</p>
            <form onSubmit={handleLoginSubmit}>
                <input type="text" name="username" value={loginData.username}
                    onChange={handleChange} autoFocus required />
                <br />
                <input type="password" name="password" value={loginData.password}
                    onChange={handleChange} required />
                <br />
                <input type="submit" value="Login" />
            </form>
            {afterSubmit && <p>{afterSubmit}</p>}
            <p>Not yet registered? <Link to={'/register'}>Register</Link> </p> */}
            {/*
>>>>>>> upstream/main
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
<div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Login</h2>
  <form onSubmit={handleLoginSubmit}>
<div class="mb-3">
    <label class="form-label">Username</label>
    <input type="text" class="form-control" name="username" value={loginData.username}
                    onChange={handleChange} autoFocus required />
   </div>
  <div class="mb-3">
    <label class="form-label">Password</label>
    <input type="password" class="form-control" name="password" value={loginData.password}
                    onChange={handleChange} required />
   </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>

{afterSubmit && <p>{afterSubmit}</p>}
<p>Not yet registered? <Link to={'/register'}>Register</Link> </p>
</form>
 </div>
 </div>
<<<<<<< HEAD
 
=======
        */}








            <section style={{ height: '100vh' }}>
                <div className="container-fluid" style={{ height: '100%' }}>
                    <div className="row d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid"
                                alt="Sample image"
                            />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={handleLoginSubmit}>

                            <p style={{ fontSize: '24px' }} className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Please login to your account</p>


                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input
                                        type="text"
                                        id="form3Example3"
                                        className="form-control form-control-lg"
                                        placeholder="Enter a valid username"
                                        name="username" value={loginData.username}
                                        onChange={handleChange}
                                    />
                                    <label className="form-label" htmlFor="form3Example3">
                                        Username
                                    </label>





                                </div>
                                <div data-mdb-input-init className="form-outline mb-3">
                                    <input
                                        type="password"
                                        id="form3Example4"
                                        className="form-control form-control-lg"
                                        placeholder="Enter password"
                                        name="password" value={loginData.password}
                                        onChange={handleChange}
                                    />
                                    <label className="form-label" htmlFor="form3Example4">
                                        Password
                                    </label>



                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input
                                            className="form-check-input me-2"
                                            type="checkbox"
                                            value=""
                                            id="form2Example3"
                                        />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>







                                </div>
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button
                                        type="submit"
                                        data-mdb-button-init
                                        data-mdb-ripple-init
                                        className="btn btn-primary btn-lg"
                                        style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                                    >
                                        Login
                                    </button>
                                    {afterSubmit && <p>{afterSubmit}</p>}

                                    <p className="small fw-bold mt-2 pt-1 mb-0">
                                        Don't have an account?{'/register '}
                                        <Link to={'/register'} className="link-danger">
                                            Register
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                    <div className="text-white mb-3 mb-md-0">
                        Copyright © 2020. All rights reserved.
                    </div>
                    <div>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#!" className="text-white">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </section>

>>>>>>> upstream/main

        </>
    );
};
<<<<<<< HEAD
export default Login;
=======
export default Login;









>>>>>>> upstream/main
