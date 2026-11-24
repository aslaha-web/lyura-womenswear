
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./new-arrivals.css";

export default function NewArrivals() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch("/api/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setProducts([]);
      }
    }

    getProducts();
  }, []);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category).filter(Boolean)),
  ];

  const filteredProducts = products.filter((product) =>
    category === "All" ? true : product.category === category
  );

  return (
    <section className="new-arrivals">
      <div className="arrivals-heading">
        <p className="arrivals-eyebrow">CURATED FOR YOU</p>

        <h2>
          New <em>Arrivals</em>
        </h2>

        <p>Discover the latest pieces in our collection.</p>
      </div>

      <div className="arrival-categories">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "active" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="arrivals-grid">
        {filteredProducts.slice(0, 4).map((product) => (
          <article className="arrival-card" key={product.id}>
            <Link
              href={`/products/${product.id}`}
              className="arrival-image"
            >
              <img src={product.image} alt={product.title} />
              <span className="arrival-label">NEW</span>
            </Link>

            <h3>{product.title}</h3>

            <p className="arrival-price">
              ₹{Number(product.price).toLocaleString("en-IN")}
            </p>
          </article>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="no-products">No products found.</p>
      )}

      <div className="arrivals-footer">
        <Link href="/products" className="view-all-button">
          VIEW ALL PRODUCTS <span>→</span>
        </Link>
      </div>
    </section>
  );
}
