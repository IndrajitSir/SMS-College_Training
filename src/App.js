
import React from "react";
import './App.css';
import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Account from "./pages/Account";
function App() {
  return (
    <div>
      <h2 style={{ textAlign: "center", color: "red" }}>wlcome to my college</h2>
      <p className="para">our first website</p>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          {/* <Route path="/about" element={<About/>}></Route>
            <Route path="about/profile" element={<Profile/>}></Route>
            <Route path="about/account" element={<Account/>}></Route> */}
            {/* currect way for nested routing, watch out them self closing tags. */}
          <Route path="/about" element={<About/>}>  
            <Route path="profile" element={<Profile/>} />
            <Route path="account" element={<Account/>} />
          </Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
