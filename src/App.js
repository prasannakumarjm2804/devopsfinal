import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop/Shop";
import Shopcat from "./Pages/ShopCatogory/Shopcat";
import Product from "./Pages/Product/Product";
import Cart from "./Pages/Cart/Cart";
import { Login } from "./Pages/Login/Login";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_mens.png"
import women_banner from "./Components/Assets/banner_women.png"
import kids_banner from "./Components/Assets/banner_kids.png"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<Shopcat banner={men_banner}  category="men" />} />
          <Route path="/womens" element={<Shopcat banner={women_banner} category="women"/>} />
          <Route path="/kids" element={<Shopcat banner={kids_banner} category="kid"/>} />
          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>} />
          </Route>
          <Route path="/Cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes> 
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
