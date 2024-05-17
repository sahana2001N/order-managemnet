

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
  
        </>
    );
};

export default AdminLogin;
