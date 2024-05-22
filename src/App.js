import './App.css';
import Header from './components/Header-Bar/Header-Bar'
import Footer from './components/Footer/Footer';
import ContactForm from './components/Forms/Contact-Form';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { PrimeReactProvider } from 'primereact/api';
import SignupForm from './components/Forms/SignupForm';
import NotFound from './components/Not Found/NotFound';
import LoginForm from './components/Forms/LoginForm';
import { useEffect } from 'react';
import Profile from './components/Profile/Profile';
import AddProductForm from './components/Forms/AddProductForm';
import ProductList from './components/Forms/ProductList';
import Orders from './components/Forms/Orders';
import CheckoutForm from './components/Forms/CheckoutForm';
import Cart from './components/Forms/Cart'
import ProductDetail from './components/Product Detail/ProductDetail';
import Search from './components/Search/Search';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <PrimeReactProvider>
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="contact" element={<ContactForm />} />
            <Route path="signup" element={<SignupForm />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="profile" element={<Profile />} />
            <Route path="addproduct" element={<AddProductForm />} />
            <Route path="productlist" element={<ProductList />} />
            <Route path="orders" element={<Orders />} />
            <Route path="checkout" element={<CheckoutForm />} />
            <Route path="cart" element={<Cart />} />
            <Route path="productdetail/:id" element={<ProductDetail />} />
            <Route path="search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </PrimeReactProvider>
  );
}

export default App;
