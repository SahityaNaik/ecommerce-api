import React, { useEffect, useState } from 'react';
import API from '../api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

useEffect(() => {
  API.get('/products')
    .then((res) => {
      console.log("Products from API:", res.data);  // Add this
      setProducts(res.data);
    })
    .catch((err) => console.error('Failed to load products', err));
}, []);

const handleAddToCart = (productId) => {
  const token = localStorage.getItem('token');
  if (!token) {
    alert('Please login as customer first');
    return;
  }

  API.post('/cart/add', { productId, quantity: 1 })
    .then(() => alert('Added to cart!'))
    .catch((err) => {
      console.error('Failed to add to cart', err);
      alert('Error adding to cart');
    });
};



  return (
    <div style={{ padding: '1rem' }}>
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div style={{ display: 'grid', gap: '1rem' }}>
          {products.map((product) => (
          <div key={product._id} style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <h3>{product.name}</h3>
            <p><b>₹{product.price}</b></p>
            <p>{product.description}</p>
            <button onClick={() => handleAddToCart(product._id)}>Add to Cart</button>
          </div>
        ))}

        </div>
      )}
    </div>
  );
};

export default ProductList;
