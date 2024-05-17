<<<<<<< HEAD
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
=======



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
>>>>>>> upstream/main
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleSubmit = async (evt) => {
<<<<<<< HEAD
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

   <section style={{ backgroundColor: '#eee' }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: '150px' }}
                />
                <h5 className="my-3">john</h5>
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Johnatan Smith</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">example@example.com</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Phone</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">(097) 234-5678</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Mobile</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">(098) 765-4321</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

        </>
=======
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
>>>>>>> upstream/main
    );
};

export default UpdateProfile;
<<<<<<< HEAD
=======

>>>>>>> upstream/main
