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
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default MyProvider;
