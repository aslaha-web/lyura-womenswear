import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(products);
}

const products = [
  {
    id: 1,
    title: "Elegant Beige Abaya",
    price: 3499,
    image: "/products/abaya1.png",
    category: "Abayas",
    description: "An elegant beige abaya with a flowing silhouette, perfect for sophisticated everyday wear."
  },
  {
    id: 2,
    title: "Olive Green Abaya",
    price: 3299,
    image: "/products/abaya2.png",
    category: "Abayas",
    description: "A graceful olive green abaya with a modest design and a refined appearance."
  },
  {
    id: 3,
    title: "Lemon Yellow Abaya",
    price: 2999,
    image: "/products/abaya3.png",
    category: "Abayas",
    description: "A light yellow abaya with a simple, elegant style for daytime occasions."
  },
  {
    id: 4,
    title: "Forest Green Abaya",
    price: 3599,
    image: "/products/abaya4.png",
    category: "Abayas",
    description: "A rich green abaya featuring a classic modest silhouette for an elegant look."
  },
  {
    id: 5,
    title: "Printed Brown Abaya",
    price: 3799,
    image: "/products/abaya5.png",
    category: "Abayas",
    description: "A statement brown printed abaya designed for a distinctive and stylish appearance."
  },
  {
    id: 6,
    title: "Golden Layered Necklace",
    price: 899,
    image: "/products/acc1.png",
    category: "Accessories",
    description: "A delicate layered gold-tone necklace for adding elegance to any outfit."
  },
  {
    id: 7,
    title: "Elegant Gold Earrings",
    price: 699,
    image: "/products/acc2.png",
    category: "Accessories",
    description: "Stylish gold-tone earrings suitable for both everyday wear and special occasions."
  },
  {
    id: 8,
    title: "Floral Pendant Necklace",
    price: 999,
    image: "/products/acc3.png",
    category: "Accessories",
    description: "A delicate floral pendant necklace with a feminine and timeless design."
  },
  {
    id: 9,
    title: "Classic Gold Watch",
    price: 1499,
    image: "/products/acc4.png",
    category: "Accessories",
    description: "A classic gold-tone wristwatch that complements both casual and formal outfits."
  },
  {
    id: 10,
    title: "Pearl Flower Hair Clip",
    price: 399,
    image: "/products/acc5.png",
    category: "Accessories",
    description: "A decorative floral hair clip with pearl-inspired details for an elegant finish."
  },
  {
    id: 11,
    title: "Minimal Gold Pendant",
    price: 799,
    image: "/products/acc6.png",
    category: "Accessories",
    description: "A minimalist gold-tone pendant necklace designed for effortless everyday styling."
  },
  {
    id: 12,
    title: "Brown Shoulder Bag",
    price: 1899,
    image: "/products/bag1.png",
    category: "Bags",
    description: "A spacious brown shoulder bag with a modern design for everyday essentials."
  },
  {
    id: 13,
    title: "Classic Black Tote Bag",
    price: 2199,
    image: "/products/bag2.png",
    category: "Bags",
    description: "A versatile black tote bag with a sleek design for work, shopping and daily use."
  },
  {
    id: 14,
    title: "Casual Canvas Tote",
    price: 999,
    image: "/products/bag3.png",
    category: "Bags",
    description: "A casual canvas tote bag that pairs effortlessly with relaxed everyday outfits."
  },
  {
    id: 15,
    title: "Beige Everyday Tote",
    price: 1699,
    image: "/products/bag4.png",
    category: "Bags",
    description: "A neutral beige tote bag offering a practical shape and understated style."
  },
  {
    id: 16,
    title: "Chocolate Brown Handbag",
    price: 2299,
    image: "/products/bag5.png",
    category: "Bags",
    description: "A stylish chocolate brown handbag with a classic finish for versatile styling."
  },
  {
    id: 17,
    title: "Elegant Cream Handbag",
    price: 2499,
    image: "/products/bag6.png",
    category: "Bags",
    description: "A cream handbag with delicate detailing for a polished and elegant look."
  },
  {
    id: 18,
    title: "Printed Mini Handbag",
    price: 1999,
    image: "/products/bag7.png",
    category: "Bags",
    description: "A compact printed handbag that adds a fashionable touch to everyday outfits."
  },
  {
    id: 19,
    title: "Structured Beige Handbag",
    price: 2399,
    image: "/products/bag8.png",
    category: "Bags",
    description: "A structured beige handbag with a timeless silhouette for everyday occasions."
  },
  {
    id: 20,
    title: "Brown Modest Outfit",
    price: 2799,
    image: "/products/mw1.png",
    category: "Modest Wear",
    description: "A sophisticated brown modest outfit with a relaxed fit and elegant styling."
  },
  {
    id: 21,
    title: "Ivory Modest Outfit",
    price: 2599,
    image: "/products/mw2.png",
    category: "Modest Wear",
    description: "A refined ivory outfit featuring a clean silhouette for a graceful everyday look."
  },
  {
    id: 22,
    title: "Blush Pink Modest Outfit",
    price: 2899,
    image: "/products/mw3.png",
    category: "Modest Wear",
    description: "A soft pink modest outfit with a flowing design for an elegant appearance."
  },
  {
    id: 23,
    title: "Dark Brown Printed Outfit",
    price: 3199,
    image: "/products/mw4.png",
    category: "Modest Wear",
    description: "A dark brown printed modest outfit combining a distinctive pattern with a classic style."
  }
];

