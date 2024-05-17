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


            .catch((error) => {
                console.log(error);
                setRegisterData({ username: '', password: '' });
                setAfterRegisterMessage(`Username already exists!`);
            });
            

    };

    return (
        <>
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

        </>
    );
};
export default Register;