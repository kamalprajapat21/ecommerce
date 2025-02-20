import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../components/Cards/ProductList.jsx";
import Footer from "../components/Footer/footer.jsx";
import Header from "../components/Navbhar/FirstNav.jsx"
const App = () => {
 return <>
 <Header/>
 <ProductList/>
 <Footer/>
 </>
};

export default App;



