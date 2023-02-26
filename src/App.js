import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import TunersList from "./TunersList";
import New from "./New";
import ShowOne from "./ShowOne";
import Edit from "./Edit";
// import Footer from "./Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tuners" element={<TunersList />} />
          <Route path="/tuners/new" element={<New />} />
          <Route path="/tuners/:id" element={<ShowOne />} />
          <Route path="/tuners/:id/edit" element={<Edit />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
