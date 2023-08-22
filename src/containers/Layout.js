import React from "react";
import Home from "./Home";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <div style={{ background: "#f2f2f2" }}>
      <NavBar />
      <Home />
    </div>
  );
};

export default Layout;
