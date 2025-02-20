
import React, { useState } from 'react';
import { Search, ShoppingCart, MapPin, Heart, User, Menu, Phone, Mail, ChevronDown, Bell } from 'lucide-react';

const EcommerceHeader = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [cartCount, setCartCount] = useState(3);
  const [wishlistCount, setWishlistCount] = useState(5);
  
  const categoryMenus = {
    "ALL CATEGORIES": ["New Arrivals", "Best Sellers", "Gift Sets", "Seasonal Specials", "Clearance"],
    "GIRLS FASHION": ["Dresses", "Tops", "Bottoms", "Outerwear", "Sleepwear", "Accessories", "Shoes"],
    "BOYS FASHION": ["T-shirts", "Pants", "Shorts", "Outerwear", "Sleepwear", "Accessories", "Shoes"],
    "FOOTWEAR": ["Baby Shoes", "Toddler Shoes", "Kid's Sneakers", "Sandals", "Boots", "Slippers"],
    "TOYS": ["Educational Toys", "Plush Toys", "Musical Toys", "Outdoor Play", "Building Blocks", "Puzzles"],
    "DIAPRING": ["Diapers", "Baby Wipes", "Changing Mats", "Diaper Bags", "Diaper Rash Cream", "Potty Training"],
    "FEEDING": ["Baby Food & Infant Formula", "Feeding Bottles & Teats", "Breast Feeding", "Sippers & Cups", "Bibs & Hankies", "Kids Foods & Supplements", "Teethers & Pacifiers", "Sterilizers & Warmers"],
    "BATH": ["Baby Wash", "Shampoo", "Moisturizers", "Bath Tubs", "Towels", "Bath Toys", "Bath Accessories"],
    "NURSERY": ["Cribs", "Bedding", "Storage", "Decor", "Monitors", "Night Lights", "Furniture"],
    "MOMS": ["Maternity Wear", "Nursing", "Postpartum Care", "Mom Care", "Diaper Bags", "Gift Sets"],
    "HEALTH": ["Thermometers", "First Aid", "Medications", "Grooming", "Health Accessories", "Baby Proofing"],
    "BOUTIQUES": ["Premium Brands", "Designer Collections", "Limited Editions", "Gift Sets", "Custom Orders"]
  };

  return (
    <header className="w-full">
      <div className="bg-gray-100 py-1 px-4 text-xs text-gray-600">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone size={12} className="mr-1" />
              <span>Customer Support: 1-800-BABY-HUG</span>
            </div>
            <div className="flex items-center">
              <Mail size={12} className="mr-1" />
              <span>support@firsthug.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-pink-500">Order Tracking</a>
            <a href="#" className="hover:text-pink-500">Store Locator</a>
            <div className="flex items-center">
              <span>USD</span>
              <ChevronDown size={12} />
            </div>
            <div className="flex items-center">
              <span>English</span>
              <ChevronDown size={12} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-12 flex items-center">
              <span className="font-bold text-2xl text-pink-500">First<span className="text-blue-500">Hug</span></span>
            </div>
          </div>
          
          <div className="relative w-2/5 mx-4">
            <div className="flex">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full py-2 px-4 border border-r-0 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                  <Search size={18} />
                </div>
              </div>
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 rounded-r-md">
                Search
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center cursor-pointer group">
              <User size={20} className="text-gray-600 group-hover:text-pink-500" />
              <div className="ml-1">
                <div className="text-xs text-gray-600">Welcome</div>
                <div className="text-sm font-medium">Sign In / Register</div>
              </div>
            </div>
            
            <div className="relative cursor-pointer group">
              <Heart size={22} className="text-gray-600 group-hover:text-pink-500" />
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {wishlistCount}
              </span>
              <div className="hidden group-hover:block absolute right-0 top-full z-20 bg-white shadow-lg w-64 p-3 rounded-md">
                <div className="text-sm font-medium mb-2">Wishlist Items</div>
                <div className="text-xs text-gray-600 mb-2">You have {wishlistCount} items in your wishlist</div>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs py-1 rounded">
                  View Wishlist
                </button>
              </div>
            </div>
            
            <div className="relative cursor-pointer group">
              <ShoppingCart size={22} className="text-gray-600 group-hover:text-pink-500" />
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
              <div className="hidden group-hover:block absolute right-0 top-full z-20 bg-white shadow-lg w-64 p-3 rounded-md">
                <div className="text-sm font-medium mb-2">Shopping Cart</div>
                <div className="text-xs text-gray-600 mb-2">{cartCount} items • $149.97</div>
                <button className="w-full bg-pink-500 hover:bg-pink-600 text-white text-xs py-1 rounded">
                  View Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <nav className="bg-yellow-400">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="relative group bg-pink-500 text-white px-4 py-3">
              <div className="flex items-center space-x-3">
                <Menu size={20} />
                <span className="font-medium">ALL DEPARTMENTS</span>
              </div>
              <div className="hidden group-hover:block absolute left-0 top-full bg-white shadow-lg w-64 z-10 text-gray-800">
                <ul>
                  {Object.keys(categoryMenus).map((category, idx) => (
                    <li key={idx} className="py-2 px-4 hover:bg-gray-100 border-b border-gray-100">
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <ul className="flex">
              {Object.keys(categoryMenus).slice(0, 8).map((category, index) => (
                <li 
                  key={index} 
                  className="px-4 py-3 font-medium text-sm cursor-pointer hover:bg-yellow-500 relative"
                  onMouseEnter={() => setActiveCategory(category)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  {category}
                  {activeCategory === category && (
                    <div className="absolute left-0 top-full bg-white shadow-lg w-64 z-10">
                      <ul>
                        {categoryMenus[category].map((item, idx) => (
                          <li key={idx} className="py-3 px-4 hover:bg-gray-100 text-gray-800 border-b border-gray-100">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            
            <div className="flex items-center space-x-4 text-sm">
              <a href="#" className="py-3 px-2 font-medium hover:text-pink-600 flex items-center">
                <Bell size={16} className="mr-1" />
                <span>New Arrivals</span>
              </a>
              <a href="#" className="py-3 px-2 font-medium hover:text-pink-600">Sale</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default EcommerceHeader;