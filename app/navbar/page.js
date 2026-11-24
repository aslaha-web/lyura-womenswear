
"use client";

import { useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "../context/authcontext";
import "./nav.css";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const { user, logout } = useContext(AuthContext);
  const router = useRouter();

  const closeMenu = () => setMenuOpen(false);

  const handleLogout = () => {
    logout();
    setAccountOpen(false);
    router.push("/");
  };

  return (
    <header className="lyura-header">
      <div className="announcement-bar">
        COMPLIMENTARY SHIPPING ON ORDERS ABOVE ₹2,000
      </div>

      <nav className="lyura-navbar">
        <Link href="/" className="lyura-logo" onClick={closeMenu}>
          LYURA
        </Link>

        <div className={`lyura-nav-links ${menuOpen ? "mobile-open" : ""}`}>
          <Link href="/" className="active" onClick={closeMenu}>
            HOME
          </Link>
          <Link href="/products" onClick={closeMenu}>
            SHOP
          </Link>
          <Link href="/newArrivals" onClick={closeMenu}>
            NEW ARRIVALS
          </Link>
          <Link href="/about" onClick={closeMenu}>
            OUR STORY
          </Link>
          <Link href="/contact" onClick={closeMenu}>
            CONTACT
          </Link>
        </div>

        <div className="lyura-nav-icons">
          <Link href="/products" aria-label="Search" title="Search">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="10.8" cy="10.8" r="6.5" />
              <path d="m16 16 4.5 4.5" />
            </svg>
          </Link>

          <div className="account-wrapper">
            <button
              type="button"
              className="account-icon"
              aria-label="Account"
              title="Account"
              onClick={() => setAccountOpen(!accountOpen)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="7.5" r="3.5" />
                <path d="M5 21v-2a7 7 0 0 1 14 0v2z" />
              </svg>
            </button>

            {accountOpen && (
              <div className="account-dropdown">
                {user ? (
                  <>
                    <p>
                      Hello, {user.firstName || user.username}
                    </p>
                    <button type="button" onClick={handleLogout}>
                      LOGOUT
                    </button>
                  </>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setAccountOpen(false)}
                  >
                    LOGIN
                  </Link>
                )}
              </div>
            )}
          </div>

          <Link href="/cart" aria-label="Shopping bag" title="Cart">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 8h14l1 13H4L5 8z" />
              <path d="M9 9V6a3 3 0 0 1 6 0v3" />
            </svg>
          </Link>
        </div>

        <button
          type="button"
          className="lyura-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <span className="menu-close-icon">×</span>
          ) : (
            <span className="menu-lines">
              <span></span>
              <span></span>
              <span></span>
            </span>
          )}
        </button>
      </nav>
    </header>
  );
}
