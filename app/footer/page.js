"use client";

import Link from "next/link";
import "./footer.css";

export default function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
  };

  return (
    <footer className="lyura-footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            LYURA
          </Link>

          <p className="footer-tagline">
            WOMENSWEAR · EVERYDAY ELEGANCE
          </p>

          <p className="footer-description">
            Discover timeless modest fashion designed for
            elegance, comfort and everyday confidence.
          </p>
        </div>

        {/* Explore Section */}
        <div className="footer-links">
          <h3>EXPLORE</h3>

          <Link href="/">Home</Link>
          <Link href="/products">Shop</Link>
          <Link href="/newArrivals">New Arrivals</Link>
          <Link href="/about">Our Story</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Customer Care */}
        <div className="footer-links">
          <h3>CUSTOMER CARE</h3>

          <Link href="/contact">Contact Us</Link>
          <Link href="/contact">Shipping Information</Link>
          <Link href="/contact">Returns & Exchanges</Link>
          <Link href="/contact">FAQs</Link>
        </div>

        {/* Newsletter and Social Media */}
        <div className="footer-newsletter">
          <h3>STAY CONNECTED</h3>

          <p>
            Subscribe to receive updates on new arrivals
            and special offers.
          </p>

          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email address"
              required
            />

            <button type="submit">
              SUBSCRIBE
            </button>
          </form>

        <div className="footer-social">
  <h3>FOLLOW US</h3>

  <div className="social-icons">

    {/* Instagram */}
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <svg viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
      </svg>
    </a>

    {/* Facebook */}
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <svg viewBox="0 0 24 24">
        <path d="M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.5C17.3 1.3 16.3 1 15 1c-3.3 0-5 2-5 5.5V9H7v4h3v8z" fill="currentColor" stroke="none" />
      </svg>
    </a>

    {/* Pinterest */}
    <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
      <svg viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 0 0-3.6 19.3c0-.8 0-1.7.2-2.5l1.3-5.5s-.3-.6-.3-1.5c0-1.4.8-2.5 1.9-2.5.9 0 1.3.7 1.3 1.5 0 .9-.6 2.2-.9 3.5-.3 1 .5 1.9 1.5 1.9 1.8 0 3.2-2.3 3.2-5.1 0-2.1-1.4-3.6-3.9-3.6-2.8 0-4.5 2.1-4.5 4.4 0 .8.2 1.6.7 2.1.2.2.2.3.1.6l-.2.8c-.1.3-.3.4-.6.3-1.3-.5-1.9-1.8-1.9-3.4 0-2.5 2.1-5.5 6.4-5.5 3.4 0 5.7 2.5 5.7 5.2 0 3.6-2 6.3-5 6.3-1 0-2-.6-2.3-1.2l-.7 2.7c-.2.9-.7 1.8-1.1 2.5A10 10 0 1 0 12 2z" fill="currentColor" stroke="none" />
      </svg>
    </a>

    {/* YouTube */}
    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
      <svg viewBox="0 0 24 24">
        <path d="M23 7a3 3 0 0 0-2.1-2.1C19 4.4 12 4.4 12 4.4s-7 0-8.9.5A3 3 0 0 0 1 7a31 31 0 0 0-.5 5 31 31 0 0 0 .5 5 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5A3 3 0 0 0 23 17a31 31 0 0 0 .5-5 31 31 0 0 0-.5-5z" fill="currentColor" stroke="none" />
        <path d="m10 15.5 5-3.5-5-3.5z" fill="#414334" stroke="none" />
      </svg>
    </a>

  </div>
</div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2026 LYURA. ALL RIGHTS RESERVED.</p>
        <p>MADE WITH ELEGANCE.</p>
      </div>
    </footer>
  );
}