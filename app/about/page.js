
import Image from "next/image";
import "./about.css";

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-story">
        <div className="about-content">
          <p className="about-eyebrow">ABOUT LYURA</p>

          <h1>
            Our <span>Story</span>
          </h1>

          <h2>MODEST FASHION. TIMELESS VALUES.</h2>

          <p className="about-description">
            Lyura was born from a simple belief — that modesty
            is not just a style, but a beautiful way of expressing
            confidence, grace and individuality.
          </p>

          <p className="about-description">
            We create timeless pieces for the modern woman,
            blending tradition with contemporary elegance.
            Every piece is carefully curated with your comfort,
            confidence and personal style in mind.
          </p>

          <div className="about-values">
            <div>
              <span className="value-icon">✧</span>
              <h3>QUALITY</h3>
              <p>Premium fabrics, lasting comfort.</p>
            </div>

            <div>
              <span className="value-icon">♡</span>
              <h3>CONFIDENCE</h3>
              <p>Style that feels true to you.</p>
            </div>

            <div>
              <span className="value-icon">❀</span>
              <h3>VALUES</h3>
              <p>Modest fashion with purpose.</p>
            </div>
          </div>
        </div>

        <div className="about-image">
          <Image
            src="/our-story.png"
            alt="Lyura modest fashion collection"
            width={700}
            height={1200}
            priority
            className="story-image"
          />

          <div className="image-caption">
            Elegance in every detail.
          </div>
        </div>
      </section>
    </main>
  );
}
