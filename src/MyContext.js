import { createContext, useState, useRef } from "react";
import { albumData } from "./data";

export const MyContext = createContext();
const MyProvider = ({ children }) => {
  const audioRef = useRef(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playHistory, setPlayHistory] = useState([]);

  // console.log(data);
  const [songList, setSongList] = useState(albumData);
  const [feedSong, setFeedSong] = useState([]);
  const [isLike, setIsLike] = useState(false);
  const searchedHideRef = useRef(null);
  const [autoPlay, setAutoPlay] = useState(true);
  const playerDisplay = useRef();
  const [isSingIn, setIsSingnIn] = useState(false);
  const [isSingOut, setIsSingnOut] = useState(false);

  return (
    <MyContext.Provider
      value={{
        audioRef,
        currentTrackIndex,
        setCurrentTrackIndex,
        isPlaying,
        setIsPlaying,
        playHistory,
        setPlayHistory,
        songList,
        setSongList,
        feedSong,
        setFeedSong,
        isLike,
        setIsLike,
        searchedHideRef,
        playerDisplay,
        autoPlay,
        setAutoPlay,
        isSingIn,
        setIsSingnIn,
        isSingOut,
        setIsSingnOut,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default MyProvider;
