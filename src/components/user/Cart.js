import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart,decreaseCart, addToCart,clearCart,getTotal } from '../../redux/cartSlice';




function Cart() {
  const cart = useSelector((state) => state.cart)
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotal())
  }, [cart])

  console.log('Cart Items:', cartItems);

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="container">
        <h2>Your cart is empty!</h2>
      </div>
    );
  }

  const total = cart.cartTotalAmount;
  const totalInPaise = Math.round(total); // Convert to paise and ensure it's an integer

  const handlePayment = () => {
    const options = {
      key: 'rzp_test_wO4WmmKnc9zesn', // Replace with your Razorpay key ID
      amount: totalInPaise, // Amount in paise
      currency: 'INR',
      name: 'IBM OMS',
      description: 'Purchase Description',
      handler: function (response) {
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);

        // Construct the order data
        console.log(cartItems)
        const orderData = {
          orderLineItemsListDto: cartItems.map((item) => ({
            skuCode: item.name, // Assuming each cart item has a skuCode
            price: item.price,
            quantity: item.quantity,
          })),
        };

        // Log the order data to verify the structure
        console.log(orderData);

        fetch('http://localhost:7010/api/order/create', { // Update URL to your Spring Boot controller
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify(orderData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          console.log('Order successfully placed:', data);
          // Handle post-order logic here, e.g., redirect to confirmation page
        })
        .catch((error) => {
          console.error('Error placing order:', error);
        });
    },
      prefill: {
        name: 'Customer Name', // Replace with customer name if available
        email: 'customer.email@example.com', // Replace with customer email if available
      },
      theme: {
        color: '#F37254',
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response) {
      alert('Payment failed! Reason: ' + response.error.description);
      // Handle payment failure here
    });

    rzp1.open();
  };

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
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>₹{item.price.toFixed(2)}</td>
              <td><div className='cart-product-quantity'>
                <button onClick={() => dispatch(decreaseCart(item))}>-</button>
                {item.cartQuantity}
                <button onClick={() => dispatch(addToCart(item))}>+</button></div>
                </td>
              <td>₹{(item.price * item.cartQuantity).toFixed(2)}</td>
              <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
            </tr>
          ))}
        </tbody>
      </table>

  <button onClick={() => dispatch(clearCart())}>Clear Cart</button>

      <p className="text-end">
        <b>Total:  ₹{cart.cartTotalAmount}</b>
      </p>
      <button className="btn btn-primary" onClick={handlePayment}>
        Proceed to Payment
      </button>
    </div>
  );
}

export default Cart;
