import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import './Ordernow.css';

export default function FaveDish() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const foods = [
    { id: 1, name: 'French Fries', price: 5.99, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400', category: 'Sides' },
    { id: 2, name: 'Kottu', price: 3.99, image: 'https://images.unsplash.com/photo-1631452180539-96aca7d48617?w=400', category: 'Sri Lankan' },
    { id: 3, name: 'Fried Rice', price: 7.99, image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400', category: 'Rice Dishes' },
    { id: 4, name: 'Burger', price: 6.99, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400', category: 'Fast Food' },
    { id: 5, name: 'Fried Chicken', price: 8.99, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400', category: 'Chicken' },
    { id: 6, name: 'Pizza', price: 10.99, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400', category: 'Italian' }
  ];

  const addToCart = (food) => {
    const existing = cart.find(item => item.id === food.id);
    if (existing) {
      setCart(cart.map(item => item.id === food.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...food, qty: 1 }]);
    }
  };

  const updateQty = (id, qty) => {
    if (qty <= 0) setCart(cart.filter(item => item.id !== id));
    else setCart(cart.map(item => item.id === id ? { ...item, qty } : item));
  };

  const removeItem = (id) => setCart(cart.filter(item => item.id !== id));

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="favedish-container">
      {/* Header */}
      <header className="favedish-header">
        <div className="header-content">
          <div>
            <h1 className="brand-title">FaveDish</h1>
            <p className="brand-subtitle">Order Your Favorite</p>
          </div>
          <button 
            onClick={() => setShowCart(!showCart)} 
            className="cart-btn"
          >
            <ShoppingCart size={20} />
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="cart-badge">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="favedish-main">
        <div className="main-content">
          <div className={`menu-cart-wrapper ${showCart ? 'cart-open' : ''}`}>
            {/* Menu Section */}
            <section className="menu-section">
              <h2 className="section-title">Available Foods</h2>
              <div className="food-grid">
                {foods.map(food => (
                  <div key={food.id} className="food-card">
                    <img 
                      src={food.image} 
                      alt={food.name} 
                      className="food-image"
                    />
                    <div className="food-info">
                      <p className="food-category">{food.category}</p>
                      <h3 className="food-name">{food.name}</h3>
                      <div className="food-bottom">
                        <span className="food-price">${food.price.toFixed(2)}</span>
                        <button 
                          onClick={() => addToCart(food)} 
                          className="add-btn"
                        >
                          <Plus size={18} /> Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Cart Section */}
            {showCart && (
              <aside className="cart-section">
                <div className="cart-wrapper">
                  <h2 className="section-title">Your Cart</h2>
                  {cart.length === 0 ? (
                    <p className="empty-cart">Your cart is empty</p>
                  ) : (
                    <>
                      <div className="cart-items">
                        {cart.map(item => (
                          <div key={item.id} className="cart-item">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="cart-item-img"
                            />
                            <div className="cart-item-info">
                              <h4 className="cart-item-name">{item.name}</h4>
                              <p className="cart-item-price">${(item.price * item.qty).toFixed(2)}</p>
                            </div>
                            <div className="qty-controls">
                              <button 
                                onClick={() => updateQty(item.id, item.qty - 1)} 
                                className="qty-btn"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="qty-number">{item.qty}</span>
                              <button 
                                onClick={() => updateQty(item.id, item.qty + 1)} 
                                className="qty-btn"
                              >
                                <Plus size={16} />
                              </button>
                              <button 
                                onClick={() => removeItem(item.id)} 
                                className="remove-btn"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="cart-summary">
                        <div className="summary-row">
                          <span>Subtotal:</span>
                          <span>${total}</span>
                        </div>
                        <div className="summary-row">
                          <span>Delivery:</span>
                          <span>$2.99</span>
                        </div>
                        <div className="summary-total">
                          <span>Total:</span>
                          <span>${(parseFloat(total) + 2.99).toFixed(2)}</span>
                        </div>
                      </div>

                      <button className="checkout-btn">
                        Proceed to Checkout
                      </button>
                    </>
                  )}
                </div>
              </aside>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}