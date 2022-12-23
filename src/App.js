import React from "react";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";

const App = () => (
  <>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="bookatable" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  </>
);

export default App;
