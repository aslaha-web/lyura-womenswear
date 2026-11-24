
'use client'

import React, { useEffect, useState } from 'react'
import './products.css'
import Link from 'next/link'

export default function Products() {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [maxPrice, setMaxPrice] = useState(10000)
  const [sort, setSort] = useState('default')
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api/products')

        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }

        const data = await response.json()
        setProducts(data)
      } catch (err) {
        setError('Products load cheyyaan kazhinjilla.')
      }
    }

    fetchProducts()
  }, [])

  const categories = [
    'All',
    ...new Set(products.map((p) => p.category).filter(Boolean))
  ]

  const filteredProducts = products
    .filter((p) => {
      const matchesCategory =
        category === 'All' || p.category === category

      const matchesSearch = p.title
        .toLowerCase()
        .includes(search.toLowerCase())

      const matchesPrice = Number(p.price) <= maxPrice

      return matchesCategory && matchesSearch && matchesPrice
    })
    .sort((a, b) => {
      if (sort === 'low') return a.price - b.price
      if (sort === 'high') return b.price - a.price
      if (sort === 'name') return a.title.localeCompare(b.title)
      return 0
    })

  return (
    <main className="products-page">
      <header className="products-heading">
        <p className="products-eyebrow">THE LYURA COLLECTION</p>
        <h1>Our <span>Collection</span></h1>
        <p>Discover timeless pieces made for your style.</p>
      </header>

      <div className="products-layout">
        <aside className="products-sidebar">
          <h2>Filters</h2>

          <div className="filter-group">
            <h3>Categories</h3>

            {categories.map((item) => (
              <button
                key={item}
                className={`filter-category ${
                  category === item ? 'active' : ''
                }`}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="filter-group">
            <h3>Maximum Price</h3>
            <p className="price-value">
              ₹{maxPrice.toLocaleString('en-IN')}
            </p>

            <input
              type="range"
              min="0"
              max="10000"
              step="100"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              aria-label="Maximum price"
            />
          </div>

          <button
            className="clear-filters"
            onClick={() => {
              setCategory('All')
              setSearch('')
              setMaxPrice(10000)
              setSort('default')
            }}
          >
            CLEAR FILTERS
          </button>
        </aside>

        <section className="products-content">
          <div className="products-toolbar">
            <input
              type="search"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search products"
            />

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              aria-label="Sort products"
            >
              <option value="default">Default sorting</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

          <p className="products-count">
            Showing {filteredProducts.length} products
          </p>

          {error ? (
            <p>{error}</p>
          ) : filteredProducts.length === 0 ? (
            <p className="no-products">No products found.</p>
          ) : (
            <div className="products-grid">

              {filteredProducts.map((p) => (
              <Link href={`/products/${p.id}`} key={p.id}>

                <article className="product-card" >
                  <div className="product-image">
                    <img src={p.image} alt={p.title} />
                    <span className="product-badge">LYURA</span>
                  </div>

                  <div className="product-info">
                    <p className="product-category">{p.category}</p>
                    <h3>{p.title}</h3>
                    <p className="product-price">
                      ₹{Number(p.price).toLocaleString('en-IN')}
                    </p>
                    <p className="product-description">
                      {p.description}
                    </p>
                  </div>
                </article>

              </Link>
                
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
