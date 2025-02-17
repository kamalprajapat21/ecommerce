import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    name: "Bajaj Cycle",
    imageUrl: "https://th.bing.com/th/id/OIP.vZAGWdKhSsSm_5krakNlUQHaGC?w=254&h=207&c=7&r=0&o=5&dpr=1.4&pid=1.7",
    rating: 4.5,
    reviewCount: 35778,
    price: 849,
    originalPrice: 1020,
    prime: true,
    freeDeliveryDate: "Wed, 12 Feb",
    bestSeller: true,
  },
  {
    name: "Bajaj Cycle",
    imageUrl: "https://th.bing.com/th/id/OIP.vZAGWdKhSsSm_5krakNlUQHaGC?w=254&h=207&c=7&r=0&o=5&dpr=1.4&pid=1.7",
    rating: 4.5,
    reviewCount: 35778,
    price: 849,
    originalPrice: 1020,
    prime: true,
    freeDeliveryDate: "Wed, 12 Feb",
    bestSeller: true,
  },
  {
    name: "Bajaj Cycle",
    imageUrl: "https://th.bing.com/th/id/OIP.vZAGWdKhSsSm_5krakNlUQHaGC?w=254&h=207&c=7&r=0&o=5&dpr=1.4&pid=1.7",
    rating: 4.5,
    reviewCount: 35778,
    price: 849,
    originalPrice: 1020,
    prime: true,
    freeDeliveryDate: "Wed, 12 Feb",
    bestSeller: true,
  },
  {
    name: "Bajaj Cycle",
    imageUrl: "https://th.bing.com/th/id/OIP.vZAGWdKhSsSm_5krakNlUQHaGC?w=254&h=207&c=7&r=0&o=5&dpr=1.4&pid=1.7",
    rating: 4.5,
    reviewCount: 35778,
    price: 849,
    originalPrice: 1020,
    prime: true,
    freeDeliveryDate: "Wed, 12 Feb",
    bestSeller: true,
  },
  {
    name: "Bajaj Cycle",
    imageUrl: "https://th.bing.com/th/id/OIP.vZAGWdKhSsSm_5krakNlUQHaGC?w=254&h=207&c=7&r=0&o=5&dpr=1.4&pid=1.7",
    rating: 4.5,
    reviewCount: 35778,
    price: 849,
    originalPrice: 1020,
    prime: true,
    freeDeliveryDate: "Wed, 12 Feb",
    bestSeller: true,
  },
  {
    name: "Bajaj Cycle",
    imageUrl: "https://th.bing.com/th/id/OIP.vZAGWdKhSsSm_5krakNlUQHaGC?w=254&h=207&c=7&r=0&o=5&dpr=1.4&pid=1.7",
    rating: 4.5,
    reviewCount: 35778,
    price: 849,
    originalPrice: 1020,
    prime: true,
    freeDeliveryDate: "Wed, 12 Feb",
    bestSeller: true,
  },
  {
    name: "Bajaj Cycle",
    imageUrl: "https://th.bing.com/th/id/OIP.vZAGWdKhSsSm_5krakNlUQHaGC?w=254&h=207&c=7&r=0&o=5&dpr=1.4&pid=1.7",
    rating: 4.5,
    reviewCount: 35778,
    price: 849,
    originalPrice: 1020,
    prime: true,
    freeDeliveryDate: "Wed, 12 Feb",
    bestSeller: true,
  },
  {
    name: "Bajaj Cycle",
    imageUrl: "https://th.bing.com/th/id/OIP.vZAGWdKhSsSm_5krakNlUQHaGC?w=254&h=207&c=7&r=0&o=5&dpr=1.4&pid=1.7",
    rating: 4.5,
    reviewCount: 35778,
    price: 849,
    originalPrice: 1020,
    prime: true,
    freeDeliveryDate: "Wed, 12 Feb",
    bestSeller: true,
  },
  {
    name: "Bajaj Cycle",
    imageUrl: "https://th.bing.com/th/id/OIP.vZAGWdKhSsSm_5krakNlUQHaGC?w=254&h=207&c=7&r=0&o=5&dpr=1.4&pid=1.7",
    rating: 4.5,
    reviewCount: 35778,
    price: 849,
    originalPrice: 1020,
    prime: true,
    freeDeliveryDate: "Wed, 12 Feb",
    bestSeller: true,
  },
  {
    name: "Bajaj Cycle",
    imageUrl: "https://th.bing.com/th/id/OIP.vZAGWdKhSsSm_5krakNlUQHaGC?w=254&h=207&c=7&r=0&o=5&dpr=1.4&pid=1.7",
    rating: 4.5,
    reviewCount: 35778,
    price: 849,
    originalPrice: 1020,
    prime: true,
    freeDeliveryDate: "Wed, 12 Feb",
    bestSeller: true,
  },
  {
    name: "Bajaj Cycle",
    imageUrl: "https://th.bing.com/th/id/OIP.vZAGWdKhSsSm_5krakNlUQHaGC?w=254&h=207&c=7&r=0&o=5&dpr=1.4&pid=1.7",
    rating: 4.5,
    reviewCount: 35778,
    price: 849,
    originalPrice: 1020,
    prime: true,
    freeDeliveryDate: "Wed, 12 Feb",
    bestSeller: true,
  },
  {
    name: "Hero Mountain Bike",
    imageUrl: "https://example.com/hero-bike.jpg",
    rating: 4.2,
    reviewCount: 12045,
    price: 999,
    originalPrice: 1200,
    prime: false,
    freeDeliveryDate: "Fri, 15 Feb",
    bestSeller: false,
  },
  // Add more products here
];

function ProductList() {
  return (
    <div className="flex flex-wrap gap-4">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
