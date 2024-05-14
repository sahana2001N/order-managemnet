// UpdateProfile.js 

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userUpdateProfile } from "../../redux/UserSlice";
import UserService from "../../services/UserService";

const UpdateProfile = () => {
    console.log('UpdateProfile');
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.loggedInUser);
    const token = useSelector(store => store.user.jwtToken);
    console.log(userData);
    const [formData, setFormData] = useState(userData);

    const handleChange = (evt) => {
        console.log(evt.target);
        console.log(formData);
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleSubmit = async (evt) => {
        console.log(formData);
        evt.preventDefault();
        try {
            const user = await UserService.updateUserProfile(formData, token);
            console.log(user);
            dispatch(userUpdateProfile(user));
        }
        catch (error) {
            console.log(error);
            if (error.code === 'ERR_BAD_REQUEST')
                alert(error.message);
        }
    };

    return (
        <>
            {/* <h1>Update Your Profile</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input type="text" name="firstName" value={formData.firstName}
                    onChange={handleChange} autoFocus required />
                <label>Last Name:</label>
                <input type="text" name="lastName" value={formData.lastName}
                    onChange={handleChange} required />
                
                <label>Phone:</label>
                <input type="number" name="phone" value={formData.phone}
                    onChange={handleChange} required />
                <label>Email:</label>
                <input type="email" name="email" value={formData.email}
                    onChange={handleChange} required />
                <label>Avatar:</label>
                <input type="text" name="avatar" value={formData.avatar}
                    onChange={handleChange} />
                <button type="submit">Update Your Profile</button>
            </form> */}
            
 
 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
<div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Update your profile</h2>
 <form onSubmit={handleSubmit}>
    <label class="form-label">First Name</label>
    <input type="text" class="form-control" name="firstName" value={formData.firstName}
                    onChange={handleChange} autoFocus required />
    <label class="form-label">Last Name</label>
    <input type="text" class="form-control" name="lastName" value={formData.lastName}
                    onChange={handleChange} required />
    <label class="form-label">phone</label>
    <input type="number" class="form-control" name="phone" value={formData.phone}
                    onChange={handleChange} required />

    <label class="form-label">Email</label>
    <input type="email" class="form-control" name="email" value={formData.email}
                    onChange={handleChange} required />
    <label class="form-label">Avatar</label>
    <input type="text" class="form-control" name="avatar" value={formData.avatar}
                    onChange={handleChange} required />
   <button type="submit" class="btn btn-primary">Update your profile</button>
   </form>
   </div>
   </div>



        </>
    );
};

export default UpdateProfile;
