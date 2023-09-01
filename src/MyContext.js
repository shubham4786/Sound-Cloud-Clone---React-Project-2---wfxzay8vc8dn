import { createContext, useState, useRef } from "react";

export const MyContext = createContext();
const MyProvider = ({ children }) => {
  const audioRef = useRef(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <MyContext.Provider
      value={{
        audioRef,
        currentTrackIndex,
        setCurrentTrackIndex,
        isPlaying,
        setIsPlaying,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default MyProvider;
