import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Services from './pages/Services';
import Industries from './pages/Industries';
import GlobalSupply from './pages/GlobalSupply';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import MineralPage from './pages/MineralPage';
import { seoPages } from './data/seoPages';
import './App.css';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            {/* Core pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/global-supply" element={<GlobalSupply />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />

            {/* SEO Mineral Landing Pages */}
            <Route path="/quartz-supplier" element={<MineralPage data={seoPages.quartz} />} />
            <Route path="/potash-feldspar-supplier" element={<MineralPage data={seoPages['potash-feldspar']} />} />
            <Route path="/soda-feldspar-supplier" element={<MineralPage data={seoPages['soda-feldspar']} />} />
            <Route path="/fluorite-supplier" element={<MineralPage data={seoPages.fluorite} />} />
            <Route path="/mica-supplier" element={<MineralPage data={seoPages.mica} />} />
            <Route path="/copper-ore-supplier" element={<MineralPage data={seoPages.copper} />} />
            <Route path="/nickel-ore-supplier" element={<MineralPage data={seoPages.nickel} />} />
            <Route path="/tungsten-supplier" element={<MineralPage data={seoPages.tungsten} />} />
            <Route path="/tantalum-supplier" element={<MineralPage data={seoPages.tantalum} />} />
            <Route path="/niobium-supplier" element={<MineralPage data={seoPages.niobium} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
