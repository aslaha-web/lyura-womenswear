
import Link from 'next/link';
import NewArrivals from './newArrivals/page';

export default function Home() {
  return (
    <div className="lyura-home">
      {/* Hero Section */}
      <main className="hero">

        {/* Left Side - Image */}
        <div className="hero-image">
          <img
            src="/lyura-model.png"
            alt="LYURA Women's Fashion Collection"
          />
        </div>

        {/* Right Side - Content */}
        <div className="hero-content">
          <p className="eyebrow">
            THE EVERYDAY EDIT
            <span></span>
          </p>

          <h2>
            Style that
            <br />
            <em>feels like you.</em>
          </h2>

          <p className="description">
            Thoughtfully chosen pieces for a wardrobe
            that feels timeless, effortless and entirely yours.
          </p>

          <a href="/shop" className="shop-button">
            DISCOVER THE COLLECTION
            <span>→</span>
          </a>

          <p className="tagline">
            LYURA · WOMENSWEAR · EVERYDAY ELEGANCE
          </p>
        </div>

      </main>
        <NewArrivals/>

    </div>
  );
}
