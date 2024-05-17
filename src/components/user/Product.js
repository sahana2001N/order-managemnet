import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addItem , updateQuantity} from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
function Product() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch data from the URL
    fetch('http://localhost:7070/api/product/allProducts')
      .then(response => response.json())
      .then(data => setProducts(data.map(product => ({ ...product, quantity: 1 })))) // Set initial quantity to 1 for each product
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures the effect runs only once

  // Function to handle adding item to cart
  const addToCart = (product) => {

    let temp = cart;
    temp.push(product);
    setCart(temp);

    alert("Product added successfully");
    console.log(cart);
    console.log(cart.length);
    dispatch(addItem(product))
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
  
  return (
    <div className="container">
      <div className="row">
        {/* Mapping over the users array and rendering a card component for each user */}
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
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <button onClick={viewCart} className="btn btn-secondary">View Cart</button> */}
    </div>
  );
}

export default Product;
