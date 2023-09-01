import React, { useContext } from "react";
// import Home from "./Home";
import NavBar from "../components/NavBar";
// import PlayList from "./PlayList";
import AudioPlayer from "../components/AudioPlayer";
import { MyContext } from "../MyContext";

const Layout = (props) => {
  const { songList } = useContext(MyContext);
  const albumData = songList.data;
  const songs = albumData?.songs;
  // const songs = "avd";

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
