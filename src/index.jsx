import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/';
import Header from './components/Header';
import Footer from './components/Footer';
import Logement from './pages/Logement';
import Propos from './pages/Propos';
import Error from './components/Error';
import './utils/styles/index.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    a {
      text-decoration: none;
      color: #FF6060;
    }

    *{
      margin: 0px;
      font-weight: 500;
    }
`;

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
