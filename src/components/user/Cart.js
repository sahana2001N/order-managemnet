


// import React from 'react';
// import { useLocation } from 'react-router-dom';

// function Cart() {
//   // Get the location object using useLocation hook
//   const location = useLocation();
//   // Parse the URL parameters to extract user data
//   const searchParams = new URLSearchParams(location.search);
//   const name = searchParams.get('name');
//   const username = searchParams.get('username');
//   const email = searchParams.get('email');
//   const phone = searchParams.get('phone');

//   return (
//     <div>
//       <h2>Cart</h2>
//       {name ? (
//         <div>
//           <p>Name: {name}</p>
//           <p>Username: {username}</p>
//           <p>Email: {email}</p>
//           <p>Phone: {phone}</p>
//         </div>
//       ) : (
//         <p>No user data received</p>
//       )}
//     </div>
//   );
// }

// export default Cart;


// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// function Cart() {
//   // Get the location object using useLocation hook
//   const location = useLocation();
//   const navigate = useNavigate(); // Importing useNavigate hook

//   // Parse the URL parameters to extract user data
//   const searchParams = new URLSearchParams(location.search);
//   const name = searchParams.get('name');
//   const username = searchParams.get('username');
//   const email = searchParams.get('email');
//   const phone = searchParams.get('phone');

//   // Function to handle removal of cart
//   const removeCart = () => {
//     // Redirect to a new URL without cart parameters
//     // You can replace '/cart' with any other URL if needed
//     // e.g., navigate('/')
//     navigate('/cart');
//   };

//   return (
//     <div>
//       <h2>Cart</h2>
//       {name ? (
//         <div>
//           <p>Name: {name}</p>
//           <p>Username: {username}</p>
//           <p>Email: {email}</p>
//           <p>Phone: {phone}</p>
//           <button onClick={removeCart}>Remove Cart</button>
//         </div>
//       ) : (
//         <p>No user data received</p>
//       )}
//     </div>
//   );
// }

// export default Cart;



import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Cart() {
  // Get the location object using useLocation hook
  const location = useLocation();
  const navigate = useNavigate(); // Importing useNavigate hook

  // Parse the URL parameters to extract user data
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name');
  const username = searchParams.get('username');
  const email = searchParams.get('email');
  const phone = searchParams.get('phone');

  // Function to handle removal of cart
  const removeCart = () => {
    // Redirect to a new URL without cart parameters
    // You can replace '/cart' with any other URL if needed
    // e.g., navigate('/')
    navigate('/cart');
  };

  // Function to handle payment
  const handlePayment = () => {
    // Perform payment logic here
    alert('Payment completed successfully!');
  };

  return (
    <div>
      <h2>Cart</h2>
      {name ? (
        <div>
          <p>Name: {name}</p>
          <p>Username: {username}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <button onClick={removeCart}>Remove Cart</button>
          <button onClick={handlePayment}>Proceed to Payment</button>
        </div>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </div>
  );
}

export default Cart;



