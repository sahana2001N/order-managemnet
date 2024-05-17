


import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userUpdateProfile } from '../../redux/UserSlice';
import UserService from '../../services/UserService';
import { Input, Ripple, initMDB } from 'mdb-ui-kit';

const UpdateProfile = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.loggedInUser);
    const token = useSelector((store) => store.user.jwtToken);

    const [formData, setFormData] = useState(userData);

    const handleChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const user = await UserService.updateUserProfile(formData, token);
            dispatch(userUpdateProfile(user));
        } catch (error) {
            console.error(error);
            if (error.code === 'ERR_BAD_REQUEST') {
                alert(error.message);
            }
        }
    };

    useEffect(() => {
        initMDB({ Input, Ripple });
    }, []);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4" style={{ width: '30rem' }}>
                <form onSubmit={handleSubmit}>
                    {/* 2 column grid layout with text inputs for the first and last names */}
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <input
                                    type="text"
                                    id="form6Example1"
                                    className="form-control"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                                <label className="form-label" htmlFor="form6Example1">First name</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <input
                                    type="text"
                                    id="form6Example2"
                                    className="form-control"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                                <label className="form-label" htmlFor="form6Example2">Last name</label>
                            </div>
                        </div>
                    </div>

                    {/* Email input */}
                    <div className="form-outline mb-4">
                        <input
                            type="email"
                            id="form6Example5"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <label className="form-label" htmlFor="form6Example5">Email</label>
                    </div>

                    {/* Number input */}
                    <div className="form-outline mb-4">
                        <input
                            type="number"
                            id="form6Example6"
                            className="form-control"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <label className="form-label" htmlFor="form6Example6">Phone</label>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="formFile" className="form-label">Upload Photo</label>
                        <input
                            className="form-control"
                            type="file"
                            id="formFile"
                            name="avatar"
                            onChange={handleChange}
                        />
                    </div>

                    {/* Submit button */}
                    <button data-mdb-ripple-init type="submit" className="btn btn-primary btn-block mb-4">Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
