

// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// function Cart() {
//   // Get the location object using useLocation hook
//   const location = useLocation();
//   const navigate = useNavigate(); // Importing useNavigate hook

//   // Parse the URL parameters to extract user data
//   const searchParams = new URLSearchParams(location.search);
//   const name = searchParams.get('name');
//   const price = searchParams.get('price');
//   const description = searchParams.get('description');

//   // Function to handle removal of cart
//   const removeCart = () => {
//     // Redirect to a new URL without cart parameters
//     // You can replace '/cart' with any other URL if needed
//     // e.g., navigate('/')
//     navigate('/cart');
//   };

//   // Function to handle payment
//   const handlePayment = () => {
//     // Perform payment logic here
//     alert('Payment completed successfully!');
//   };

//   return (
//     <div>
//       <h2>Cart</h2>
//       {name ? (
//         <div>
//           <p>Name: {name}</p>
//           <p>price: {price}</p>
//           <p>description: {description}</p>
//           <button onClick={removeCart}>Remove Cart</button>
//           <button onClick={handlePayment}>Proceed to Payment</button>
//         </div>
//       ) : (
//         <p>Your cart is empty!</p>
//       )}
//     </div>
//   );
// }

// export default Cart;

import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  console.log("in cart" +cartItems);
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="container">
        <h2>Your cart is empty!</h2>
      </div>
    );
  }

  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="container">
      <h2>Cart</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-end"><b>Total: ${total.toFixed(2)}</b></p>
    </div>
  );
}

export default Cart;
