import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Events from './screens/events';
import Team from './screens/Team';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/sponsorus" element = {<SponsorUs/>}/> */}
        <Route path="/events" element = {<Events/>}/>
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
