import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';


function Product() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const cartItems = useSelector(state => state.cart.items); // Access cart items from Redux store

  useEffect(() => {
    // Fetch data from the URL
    fetch('http://localhost:7070/api/product/allProducts')
      .then(response => response.json())
      .then(data => setProducts(data.map(product => ({ ...product, quantity: 1 })))) // Set initial quantity to 1 for each product
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures the effect runs only once

  // Function to handle adding item to cart
  // const addToCart = (product) => {
  //   const existingItem = cartItems.find(item => item.id === product.id); // Check if the product is already in the cart
  //   if (existingItem) {
  //     // If the product is already in the cart, update its quantity
  //     const updatedItem = { ...existingItem, quantity: existingItem.quantity + 1 };
  //     dispatch(addItem(updatedItem)); // Dispatch action to update the quantity in the cart state
  //   } else {
  //     // If the product is not in the cart, add it with quantity 1
  //     const newItem = { ...product, quantity: 1 };
  //     dispatch(addItem(newItem)); // Dispatch action to add the product to the cart state
  //   }
  //   alert("Product added successfully");
  // };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }

  // Function to handle decrementing quantity
  // const decrementQuantity = (product) => {
  //   if (product.quantity > 1) {
  //     const updatedProduct = { ...product, quantity: product.quantity - 1 };
  //     setProducts(products.map(p => (p.id === product.id ? updatedProduct : p)));
  //   }
  // };

  // // Function to handle incrementing quantity
  // const incrementQuantity = (product) => {
  //   const updatedProduct = { ...product, quantity: product.quantity + 1 };
  //   setProducts(products.map(p => (p.id === product.id ? updatedProduct : p)));
  // };

  return (
    <div className="container">
      <div className="row">
        {/* Mapping over the products array and rendering a card component for each product */}
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card" style={{ width: '18rem' }}>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: {product.price}</p>
                <p className="card-text">Id: {product.id}</p>
                <p className="card-text">Description: {product.description}</p>
                {/* <div className="input-group mb-3">
                  <button className="btn btn-outline-secondary" type="button" onClick={() => decrementQuantity(product)}>-</button>
                  <input type="text" className="form-control text-center" value={product.quantity} readOnly />
                  <button className="btn btn-outline-secondary" type="button" onClick={() => incrementQuantity(product)}>+</button>
                </div> */}
                {/* Call addToCart function with product data when button is clicked */}
                <button onClick={() => handleAddToCart(product)} className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
