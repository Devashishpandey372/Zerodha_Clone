import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import HomePage from './landing_page/home/HomePage';
import SignupPage from './landing_page/signup/SignupPage';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/product/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './/landing_page/support/SupportPage';

import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';

import UserLogin from "./landing_page/auth/UserLogin";
import UserSignup from "./landing_page/auth/UserSignup";

import { GoogleOAuthProvider } from '@react-oauth/google';

const GOOGLE_CLIENT_ID = "1036417252822-2eq9lb80p6eo2iouf2a4lmda1kes51j0.apps.googleusercontent.com";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={"1036417252822-2eq9lb80p6eo2iouf2a4lmda1kes51j0.apps.googleusercontent.com"}>
  <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/product" element={<ProductPage/>}/>
        <Route path="/pricing" element={<PricingPage/>}/>
        <Route path="/support" element={<SupportPage/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/login" element={<UserLogin />} />
        {/* <Route path="/signup" element={<UserSignup />} /> */}

    </Routes>
    <Footer />
  </BrowserRouter>
  </GoogleOAuthProvider>
);


