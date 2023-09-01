import React from "react";
// import Home from "./Home";
import NavBar from "../components/NavBar";
// import PlayList from "./PlayList";
import AudioPlayer from "../components/AudioPlayer";

const Layout = (props) => {
  const albumData = JSON.parse(localStorage.getItem("albumData"));
  const songs = albumData.data.songs;
  // console.log(songs);

  const playlist = songs;
  return (
    <div>
      <NavBar />
      {props.children}
      <AudioPlayer playlist={playlist} />
    </div>
  );
};

export default Layout;
