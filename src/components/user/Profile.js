import React from "react";
import { useSelector } from "react-redux";
import UpdateProfile from "./UpdateProfile";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
>>>>>>> upstream/main

const Profile = () => {
    const userData = useSelector((state) => state.user.loggedInUser);

    return (
        <>
            
<<<<<<< HEAD
            {userData && (
                <div>
                    <p>Username: {userData.username}</p>
                    <p>Fist name: {userData.firstName}</p>
                    <p>Last Name: {userData.lastName}</p>
                    <p>Phone: {userData.phone}</p>
                    <p>Email: {userData.email}</p>
                    {userData.avatar && <img width={'300px'} src={userData.avatar} alt="Avatar" />}
                </div>
            )}
            <UpdateProfile />
=======

{userData && (

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
                <h5 className="my-3">{userData.firstname} {userData.lastName}</h5>
                <p className="text-muted mb-1">{userData.email}</p>
                <p className="text-muted mb-4">{userData.phone}</p>
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
                    <p className="text-muted mb-0">{userData.firstName} {userData.lastName}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{userData.email}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Phone</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{userData.phone}</p>
                  </div>
                </div>
                <hr />

                <Link to="/update" class="btn btn-primary">Update Profile</Link>
    
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
)};
>>>>>>> upstream/main
        </>
    );
};

export default Profile;
