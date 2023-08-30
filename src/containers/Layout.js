import React from "react";
import Home from "./Home";
import NavBar from "../components/NavBar";
import PlayList from "./PlayList";
import AudioPlayer from "../components/AudioPlayer";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Home />
      {/* <PlayList /> */}
      <AudioPlayer />
    </div>
  );
};

export default Layout;
