import './App.css';
import NavBar from './components/navbar/navbar';
import './components/navbar/navbar.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/shop';
import ShopCategory from './pages/shopCategory';
import Product from './pages/product';
import Cart from './pages/cart';
import LoginSignup from './pages/loginsignup';
import Footer from './components/Footer/Footer';
import men_banner from './components/assets/banner_mens.png';
import women_banner from './components/assets/banner_women.png';
import kid_banner from './components/assets/banner_kids.png';
import ShopContextProvider from './context/ShopContext';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path='/product/' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
