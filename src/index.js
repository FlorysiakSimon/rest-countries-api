import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css'
import HomePage from './pages/HomePage/HomePage';
import Header from "./components/Header/Header";
import CountryPage from "./pages/CountryPage/CountryPage";




render(
    <BrowserRouter>
     <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route path=":name" element={<CountryPage />}/>
      </Routes>
    </BrowserRouter>,
  document.getElementById("root")
);

