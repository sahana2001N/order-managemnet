


import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { adminLogin } from "../../redux/adminSlice";
import { useDispatch } from "react-redux";
import '@fortawesome/fontawesome-free/css/all.min.css';


const AdminLogin = () => {
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [afterSubmit, setAfterSubmit] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        setLoginData({
            ...loginData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleLoginSubmit = (evt) => {
        evt.preventDefault();
    
        // Check if the username and password match the hardcoded values
        if (loginData.username === 'admin' && loginData.password === 'admin') {
            // If match, log in successfully
            setAfterSubmit(`Hi ${loginData.username}! You've logged in successfully!`);
            setTimeout(() => {
                setLoginData({ username: '', password: '' });
                // Dispatch action for admin login with user data
                dispatch(adminLogin({ user: loginData.username })); // Pass username as user data
                navigate('/itemlist');
            }, 2000);
        } else {
            // If not match, show invalid credentials message
            setLoginData({ username: '', password: '' });
            setAfterSubmit(`Invalid credentials!`);
        }
    };
    
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
                <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Admin-Login</h2>
                    <form onSubmit={handleLoginSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" name="username" value={loginData.username}
                                onChange={handleChange} autoFocus required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" value={loginData.password}
                                onChange={handleChange} required />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        
                    </form>
                </div>
            </div>


        {/*
            <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Admin</p>
                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                          <input type="text" id="form3Example1c" className="form-control" />
                          <label className="form-label" htmlFor="form3Example1c">Username</label>
                        </div>
                      </div>
                      
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4c" className="form-control" />
                          <label className="form-label" htmlFor="form3Example4c">Password</label>
                        </div>
                      </div>
                      
                      
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">Register</button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    */}




            
        </>
    );
};

export default AdminLogin;
