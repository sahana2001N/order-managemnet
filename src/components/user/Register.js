import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import { useDispatch } from "react-redux";
import { userRegister } from "../../redux/UserSlice";

const Register = () => {

    const [registerData, setRegisterData] = useState({ username: '', password: '' });
    const [afterRegisterMessage, setAfterRegisterMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setRegisterData({
            ...registerData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleRegisterSubmit = async (evt) => {
        evt.preventDefault();
        console.log(registerData);
        UserService.registerUser(registerData)
            .then((response) => {
                console.log(response);
                dispatch(userRegister(response));
                setRegisterData({ username: '', password: '' });
                setAfterRegisterMessage(`Hi ${response.username}! You've registered successfully!`);
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            })

<<<<<<< HEAD
=======
            // .catch((error) => {
            //  console.log(error);
            //  setAfterRegisterMessage(`Invalid credentials!`);
            //  });
>>>>>>> upstream/main

            .catch((error) => {
                console.log(error);
                setRegisterData({ username: '', password: '' });
                setAfterRegisterMessage(`Username already exists!`);
            });
<<<<<<< HEAD
            
=======

>>>>>>> upstream/main

    };

    return (
        <>
<<<<<<< HEAD
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
<div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Register Here</h2>
<form onSubmit={handleRegisterSubmit}>
<div class="mb-3">
<label class="form-label">Username</label>
    <input type="text" class="form-control" name="username" value={registerData.username}
                    onChange={handleChange} auto required />
   </div>
  <div class="mb-3">
  <label class="form-label">Password</label>
    <input type="password" class="form-control" name="password" value={registerData.password}
                    onChange={handleChange} required />
   </div>
  
  <button type="submit" class="btn btn-primary">Register</button>
<>
<p>{afterRegisterMessage && afterRegisterMessage} </p>
</>
<p>Already registered? <Link to={'/login'}>Login</Link> </p> 
</form>
</div>
</div>
=======





            <section className="vh-300" style={{ backgroundColor: '#eee' }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: '25px' }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                            <form className="mx-1 mx-md-4" onSubmit={handleRegisterSubmit}>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" className="form-control" name="username" value={registerData.username}
                                                            onChange={handleChange} />
                                                        <label className="form-label" htmlFor="form3Example1c">Username</label>
                                                    </div>





                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example3c" className="form-control" name="firstName" value={registerData.firstName}
                                                            onChange={handleChange} />
                                                        <label className="form-label" htmlFor="form3Example3c">First Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4c" className="form-control" name="password" value={registerData.password}
                                                            onChange={handleChange} />
                                                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                    </div>




                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example4cd" className="form-control" name="lastName" value={registerData.lastName}
                                                            onChange={handleChange} />
                                                        <label className="form-label" htmlFor="form3Example4cd">Last Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <input type="email" id="form3Example3c" className="form-control" name="email" value={registerData.email}
                                                            onChange={handleChange} />
                                                        <label className="form-label" htmlFor="form3Example3c">Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <input type="number" id="form3Example3c" className="form-control" name="phone" value={registerData.phone}
                                                            onChange={handleChange} />
                                                        <label className="form-label" htmlFor="form3Example3c">Phone</label>
                                                    </div>
                                                </div>


                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                    <label className="form-check-label" htmlFor="form2Example3">
                                                        I agree all statements in <a href="#!">Terms of service</a>
                                                    </label>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">Register</button>
                                                </div>

                                                <p>{afterRegisterMessage && afterRegisterMessage} </p>
                                                <p>Already registered? <Link to={'/login'}>Login</Link> </p>



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

>>>>>>> upstream/main

        </>
    );
};
export default Register;