
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



import Account from "./pages/myAccount/Account";
import Product from "./pages/product/Product";
import Company from "./pages/company/Company";
import Search from "./pages/search/Search"

import Cart from "./pages/cart/Cart"
import CheckOut from "./pages/checkout/CheckOut";
import Orders from "./pages/orders/Orders";
import Orderdetails from "./pages/orderdetails/Orderdetails";
import Category from "./pages/category/category/Category";
import SubCategory from "./pages/category/subcategory/SubCategory";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Status404 from "./pages/status/404/404"



function App() {
  return (
    <>
      
    <Router>
      <Routes>
        <Route exact path="/" element={<Home  />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/account" element={<Account />} />
        <Route exact path={`/:location/:company`} element={<Company />} />
        <Route exact path="/:location/:company/:id" element={<Product />} />
        <Route exact path="/checkout" element={<CheckOut />} />
        <Route exact path="/orderdetails" element={<Orderdetails />} />
        <Route exact path="/category" element={<Category />} />
        <Route exact path="/subcategory/:workers" element={<SubCategory />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/orders" element={<Orders />} />
        <Route exact path="/:nitish" element={<Status404 />} />
      </Routes>
    </Router>

   

  </>
  );
}

export default App
