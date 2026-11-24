"use client";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import "./cart.css";
import { CartContext } from "../context/cartcontext";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const increaseQuantity = (id, size) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  const decreaseQuantity = (id, size) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id && item.size === size
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id, size) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === id && item.size === size)),
    );
  };

  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0,
  );

  const shippingCharge = totalPrice > 2000 ? 0 : 100;
  const finalTotal = totalPrice + shippingCharge;

  return (
    <main className="cart-page">
      <header className="cart-heading">
        <p>THE LYURA EXPERIENCE</p>
        <h1>
          Your <span>Shopping Bag</span>
        </h1>
        <p>Beautiful choices, thoughtfully selected.</p>
      </header>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">♡</div>
          <h2>Your bag is waiting</h2>
          <p>You haven't added anything to your bag yet.</p>
          <Link href="/products" className="continue-shopping">
            EXPLORE COLLECTION
          </Link>
        </div>
      ) : (
        <section className="cart-container">
          <div className="cart-items">
            <div className="cart-items-heading">
              <h2>YOUR ITEMS ({cart.length})</h2>
              <Link href="/products">CONTINUE SHOPPING</Link>
            </div>

            {cart.map((item) => (
              <article className="cart-item" key={`${item.id}-${item.size}`}>
                <div className="cart-item-image">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={160}
                    height={200}
                  />
                </div>

                <div className="cart-item-info">
                  <p className="cart-item-category">{item.category}</p>

                  <h3>{item.title}</h3>

                  <p className="cart-item-size">Size: {item.size}</p>

                  <p className="cart-item-price">
                    ₹{Number(item.price).toLocaleString("en-IN")}
                  </p>

                  <div className="cart-item-actions">
                    <div className="cart-quantity">
                      <button
                        onClick={() => decreaseQuantity(item.id, item.size)}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => increaseQuantity(item.id, item.size)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="remove-item"
                      onClick={() => removeItem(item.id, item.size)}
                    >
                      REMOVE
                    </button>
                  </div>
                </div>

                <p className="cart-item-subtotal">
                  ₹
                  {(Number(item.price) * item.quantity).toLocaleString("en-IN")}
                </p>
              </article>
            ))}
          </div>

          <aside className="cart-summary">
            <h2>ORDER SUMMARY</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{totalPrice.toLocaleString("en-IN")}</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span>
                {shippingCharge === 0 ? "FREE" : `₹${shippingCharge}`}
              </span>
            </div>

            <div className="summary-line"></div>

            <div className="summary-total">
              <span>Total</span>
              <span>₹{finalTotal.toLocaleString("en-IN")}</span>
            </div>

            <button className="checkout-btn">
              PROCEED TO CHECKOUT <span>↗</span>
            </button>

            <p className="cart-summary-note">
              Thoughtfully designed. Elegantly made.
            </p>
          </aside>
        </section>
      )}
    </main>
  );
}
