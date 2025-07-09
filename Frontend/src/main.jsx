import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';  
import App from './App.jsx';
import Aboutus from './pages/Aboutus.jsx';
import Ourprojects from './pages/Ourproject.jsx';
import Contact from './pages/Contact.jsx';
import Service from './pages/Service.jsx';
import './index.css';

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);
  return children;
};

const Root = () => (
  <BrowserRouter>
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/service" element={<Service />} />
        <Route path="/ourproject" element={<Ourprojects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </ScrollToTop>
  </BrowserRouter>
);

createRoot(document.getElementById('root')).render(<Root />);
