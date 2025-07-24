import React, { useEffect, useState } from 'react';
import API from '../api';

const Cart = () => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    API.get('/cart')
      .then((res) => setCart(res.data))
      .catch((err) => {
        console.error('Error fetching cart', err);
        alert('Please login as customer to view cart');
      });
  }, []);

  if (!cart) return <p>Loading cart...</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Your Cart</h2>
      {cart.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.items.map((item, index) => (
            <div key={index} style={{ borderBottom: '1px solid #ccc', padding: '0.5rem 0' }}>
              <p><b>{item.product.name}</b></p>
              <p>Qty: {item.quantity}</p>
              <p>Price: ₹{item.product.price}</p>
            </div>
          ))}
          <h3>Total: ₹{cart.total}</h3>

          <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
      )}
    </div>
  );

  function handlePlaceOrder() {
    API.post('/orders/place')
      .then(() => {
        alert('Order placed successfully!');
        window.location.reload();
      })
      .catch((err) => {
        console.error('Order failed', err);
        alert('Error placing order');
      });
  }
};

export default Cart;
