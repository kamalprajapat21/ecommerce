// import React from 'react';

// function ProductCard() {
//   const product = {  
//     name: "Bajaj Cycle",
//     imageUrl: "https://th.bing.com/th/id/OIP.vZAGWdKhSsSm_5krakNlUQHaGC?w=254&h=207&c=7&r=0&o=5&dpr=1.4&pid=1.7",
//     rating: 4.5,
//     reviewCount: 35778,
//     price: 849,
//     originalPrice: 1020,
//     prime: true,
//     freeDeliveryDate: "Wed, 12 Feb",
//     bestSeller: true,
//   };

//   const calculateDiscount = (originalPrice, price) => {
//     const discount = originalPrice - price;
//     const discountPercentage = (discount / originalPrice) * 100;
//     return Math.round(discountPercentage);
//   };

//   const discountPercent = calculateDiscount(product.originalPrice, product.price);

//   return (
//     <div className="bg-white rounded-lg shadow-md p-4 relative w-80 mb-4">
//       {product.bestSeller && (
//         <div className="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded">
//           Best Seller
//         </div>
//       )}
//       <img
//         src={product.imageUrl}
//         alt={product.name}
//         className="w-full h-48 object-contain mb-2 rounded-md"
//       />
//       <h3 className="text-lg font-semibold text-gray-800 hover:underline mb-1">
//         {product.name}
//       </h3>
//       <div className="flex items-center mb-2">
//         {[...Array(Math.floor(product.rating))].map((_, i) => (
//           <span key={i} className="text-yellow-500">&#9733;</span>
//         ))}
//         {[...Array(5 - Math.floor(product.rating))].map((_, i) => (
//           <span key={i} className="text-gray-400">&#9734;</span>
//         ))}
//         <span className="text-gray-500 text-sm ml-2">({product.reviewCount})</span>
//       </div>
//       <div className="flex items-center mb-2">
//         <span className="text-lg font-bold text-gray-800 mr-2">₹{product.price}</span>
//         <span className="text-gray-500 line-through text-sm mr-2">₹{product.originalPrice}</span>
//         <span className="text-green-500 text-sm">({discountPercent}% off)</span>
//       </div>
//       <div className="flex items-center mb-4">
//         {product.prime && (
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Amazon-Prime-logo.svg"  
//             alt="Prime"
//             className="w-10 h-auto mr-2"
//           />
//         )}
//         <span className="text-gray-600 text-sm">FREE delivery {product.freeDeliveryDate}</span>
//       </div>
//       <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded w-full">
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// export default ProductCard;





/* update Kamal

*/
import React from 'react';

function ProductCard({ product }) {
  const calculateDiscount = (originalPrice, price) => {
    const discount = originalPrice - price;
    const discountPercentage = (discount / originalPrice) * 100;
    return Math.round(discountPercentage);
  };

  const discountPercent = calculateDiscount(product.originalPrice, product.price);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 relative w-80 mb-4">
      {product.bestSeller && (
        <div className="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded">
          Best Seller
        </div>
      )}
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-contain mb-2 rounded-md"
      />
      <h3 className="text-lg font-semibold text-gray-800 hover:underline mb-1">
        {product.name}
      </h3>
      <div className="flex items-center mb-2">
        {[...Array(Math.floor(product.rating))].map((_, i) => (
          <span key={i} className="text-yellow-500">&#9733;</span>
        ))}
        {[...Array(5 - Math.floor(product.rating))].map((_, i) => (
          <span key={i} className="text-gray-400">&#9734;</span>
        ))}
        <span className="text-gray-500 text-sm ml-2">({product.reviewCount})</span>
      </div>
      <div className="flex items-center mb-2">
        <span className="text-lg font-bold text-gray-800 mr-2">₹{product.price}</span>
        <span className="text-gray-500 line-through text-sm mr-2">₹{product.originalPrice}</span>
        <span className="text-green-500 text-sm">({discountPercent}% off)</span>
      </div>
      <div className="flex items-center mb-4">
        {product.prime && (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Amazon-Prime-logo.svg"  
            alt="Prime"
            className="w-10 h-auto mr-2"
          />
        )}
        <span className="text-gray-600 text-sm">FREE delivery {product.freeDeliveryDate}</span>
      </div>
      <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded w-full">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
