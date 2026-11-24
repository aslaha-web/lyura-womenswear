"use client";

import { useEffect, useState, useContext } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import "../products.css";
import { CartContext } from "../../context/cartcontext";

export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");

  const { setCart } = useContext(CartContext);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();

        const selectedProduct = data.find(
          (item) => String(item.id) === String(id)
        );

        setProduct(selectedProduct || null);
      } catch {
        setProduct(null);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return <div className="product-message">Loading product...</div>;
  }

  if (!product) {
    return (
      <div className="product-message">
        <h2>Product Not Found</h2>
        <Link href="/products">Back to Products</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) =>
          item.id === product.id && item.size === selectedSize
      );

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id && item.size === selectedSize
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity,
          size: selectedSize,
        },
      ];
    });
  };

  return (
    <main className="product-details-page">
      <div className="product-breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/products">Products</Link>
        <span>/</span>
        <span>{product.title}</span>
      </div>

      <section className="product-details-container">
        <div className="product-details-image">
          <Image
            src={product.image}
            alt={product.title}
            width={700}
            height={900}
            priority
          />
        </div>

        <div className="product-details-content">
          <p className="product-category">{product.category}</p>

          <h1>{product.title}</h1>

          <p className="product-price">
            ₹{Number(product.price).toLocaleString("en-IN")}
          </p>

          <div className="product-line"></div>

          <h3>DESCRIPTION</h3>
          <p className="product-description">
            {product.description}
          </p>

          <div className="product-size-section">
            <h3>SELECT SIZE</h3>

            <div className="product-sizes">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className={selectedSize === size ? "active-size" : ""}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="product-quantity-section">
            <h3>QUANTITY</h3>

            <div className="quantity-control">
              <button
                onClick={() =>
                  setQuantity((prev) => Math.max(1, prev - 1))
                }
              >
                −
              </button>

              <span>{quantity}</span>

              <button onClick={() => setQuantity((prev) => prev + 1)}>
                +
              </button>
            </div>
          </div>

          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            ADD TO CART
            <span>↗</span>
          </button>

          <p className="product-bottom-note">
            Thoughtfully designed. Elegantly made.
          </p>
        </div>
      </section>
    </main>
  );
}