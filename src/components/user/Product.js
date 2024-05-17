<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addItem , updateQuantity} from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
function Product() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
=======
// import React, { useEffect, useState } from 'react';

// const Product=()=> {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch data from the URL
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => setUsers(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []); // Empty dependency array ensures the effect runs only once

//   return (
//     <div>
//       {/* Mapping over the users array and rendering a card component for each user */}
//       {users.map(user => (
//         <div key={user.id} className="card" style={{ width: '18rem', margin: '1rem' }}>
//           <div className="card-body">
//             <h5 className="card-title">{user.name}</h5>
//             <h6 className="card-subtitle mb-2 text-muted">{user.username}</h6>
//             <p className="card-text">Email: {user.email}</p>
//             <p className="card-text">Phone: {user.phone}</p>
//             <a href={`https://${user.website}`} className="card-link">{user.website}</a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Product;


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// function Product() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch data from the URL
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => setUsers(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []); // Empty dependency array ensures the effect runs only once

//   return (
//     <div className="container">
//       <div className="row">
//         {/* Mapping over the users array and rendering a card component for each user */}
//         {users.map(user => (
//           <div key={user.id} className="col-md-4 mb-4">
//             <div className="card" style={{ width: '18rem' }}>
//               <div className="card-body">
//                 <h5 className="card-title">{user.name}</h5>
//                 <h6 className="card-subtitle mb-2 text-muted">{user.username}</h6>
//                 <p className="card-text">Email: {user.email}</p>
//                 <p className="card-text">Phone: {user.phone}</p>
//                 <Link to="/cart" className="btn btn-primary">Add to Cart</Link>
                
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Product;

     
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';


// function Product() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch data from the URL
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => setUsers(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []); // Empty dependency array ensures the effect runs only once

//   // Function to handle adding item to cart
//   const addToCart = (item) => {
//     // Here, you would typically update the cart state with the clicked item
//     console.log('Item added to cart:', item);
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         {/* Mapping over the users array and rendering a card component for each user */}
//         {users.map(user => (
//           <div key={user.id} className="col-md-4 mb-4">
//             <div className="card" style={{ width: '18rem' }}>
//               <div className="card-body">
//                 <h5 className="card-title">{user.name}</h5>
//                 <h6 className="card-subtitle mb-2 text-muted">{user.username}</h6>
//                 <p className="card-text">Email: {user.email}</p>
//                 <p className="card-text">Phone: {user.phone}</p>
//                 {/* Pass the user object to the addToCart function */}
                
//                 <Link to="/cart" className="btn btn-primary">Add to Cart</Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Product;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Product() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
>>>>>>> upstream/main

  useEffect(() => {
    // Fetch data from the URL
    fetch('http://localhost:7070/api/product/allProducts')
      .then(response => response.json())
<<<<<<< HEAD
      .then(data => setProducts(data.map(product => ({ ...product, quantity: 1 })))) // Set initial quantity to 1 for each product
=======
      .then(data => setUsers(data))
>>>>>>> upstream/main
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures the effect runs only once

  // Function to handle adding item to cart
<<<<<<< HEAD
  const addToCart = (product) => {
    // const existingItem = cart.find(item => item.id === product.id);
    // console.log(existingItem);
    let temp = cart;
    temp.push(product);
    setCart(temp);
    // // if (existingItem) {
    // setCart(cart.map(item => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
    alert("Product added successfully");
    console.log(cart);
    console.log(cart.length);
    // } else {
    //   setCart([...cart, { ...product, quantity: product.quantity }]);
    // }
  };
 


  const updateQuantity = (productId, newQuantity) => {
    setProducts(products.map(product => (
      product.id === productId ? { ...product, quantity: newQuantity } : product
    )));
  };

  const incrementQuantity = (product) => {
    updateQuantity(product.id, product.quantity + 1);
  };

  const decrementQuantity = (product) => {
    if (product.quantity > 1) {
      updateQuantity(product.id, product.quantity - 1);
    }
  };
  
=======
  const addToCart = (user) => {
    // Navigate to the Cart component with user data as URL parameter
    navigate(`/cart?name=${user.name}&username=${user.username}&email=${user.email}&phone=${user.phone}`);
  };

>>>>>>> upstream/main
  return (
    <div className="container">
      <div className="row">
        {/* Mapping over the users array and rendering a card component for each user */}
<<<<<<< HEAD
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card" style={{ width: '18rem' }}>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: {product.price}</p>
                <p className="card-text">Id: {product.id}</p>
                <p className="card-text">Description: {product.description}</p>
                <div className="input-group mb-3">
                  <button className="btn btn-outline-secondary" type="button" onClick={() => decrementQuantity(product)}>-</button>
                  <input type="text" className="form-control text-center" value={product.quantity} readOnly />
                  <button className="btn btn-outline-secondary" type="button" onClick={() => incrementQuantity(product)}>+</button>
                </div>
                {/* Call addToCart function with user data when button is clicked */}
                <button onClick={() => addToCart(product)} className="btn btn-primary">Add to Cart</button>
=======
        {users.map(user => (
          <div key={user.id} className="col-md-4 mb-4">
            <div className="card" style={{ width: '18rem' }}>
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{user.username}</h6>
                <p className="card-text">Email: {user.price}</p>
                <p className="card-text">Phone: {user.description}</p>
                {/* Call addToCart function with user data when button is clicked */}
                <button onClick={() => addToCart(user)} className="btn btn-primary">Add to Cart</button>
>>>>>>> upstream/main
              </div>
            </div>
          </div>
        ))}
      </div>
<<<<<<< HEAD
      {/* <button onClick={viewCart} className="btn btn-secondary">View Cart</button> */}
=======
>>>>>>> upstream/main
    </div>
  );
}

export default Product;
