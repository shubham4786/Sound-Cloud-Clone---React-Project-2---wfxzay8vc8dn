import React, { useContext, useEffect } from "react";
// import Home from "./Home";
import NavBar from "../components/NavBar";
// import PlayList from "./PlayList";
import AudioPlayer from "../components/AudioPlayer";
import { MyContext } from "../MyContext";
import { useNavigate } from "react-router-dom";

const Layout = (props) => {
  const { songList } = useContext(MyContext);
  const navigate = useNavigate();

  const albumData = songList.data;
  const songs = albumData?.songs;
  // const songs = "avd";

  // console.log(songs);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const userInfo = localStorage.getItem("userInfo");
    if (!storedToken || !userInfo) {
      navigate("/");
    }
  }, []);

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
