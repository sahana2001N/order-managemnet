import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
const Home = () => {

    return (
        <>
    
      {/* Hero Section */}
      <section className="hero bg-primary text-white text-center py-5" style={{ backgroundColor: 'pink' }}>
        <div className="container">
          <h1 className="display-4">Welcome to Our Website</h1>
          <p className="lead">We provide high-quality services to help you achieve your goals.</p>

        </div>
      </section>
      {/* Content Section 1 */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet purus quis metus imperdiet, et ultricies sapien facilisis.</p>
              {/* <a href="#" className="btn btn-primary">Read More</a> */}
            </div>
            <div className="col-md-6">
              <img src="https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.jpg?s=1024x1024&w=is&k=20&c=N5Fw7BZfKcYJMH9camA7rQ3q--7Ev7pKlQYEB_gPfo8=" alt="About Us" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      {/* Content Section 2 */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>Our Services</h3>
              <p>We offer a wide range of services to meet your needs. Our team is dedicated to providing top-notch solutions.</p>
            </div>
            <div className="col-md-4">
              <h3>Why Choose Us</h3>
              <p>We are committed to delivering high-quality results and ensuring customer satisfaction. Trust us to help you succeed.</p>
            </div>
            <div className="col-md-4">
              <h3>Contact Us</h3>
              <p>Get in touch with us to learn more about our services and how we can assist you.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}

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
      
        </>

    );
};

export default Home;



