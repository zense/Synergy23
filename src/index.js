import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
