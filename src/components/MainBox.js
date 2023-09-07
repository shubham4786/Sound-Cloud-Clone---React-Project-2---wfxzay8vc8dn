import { useState, useEffect } from "react";
import axios from "axios";
import BoxScroll from "./BoxScroll";
import { fetchMusic } from "../apiCall/GetAlbum";

const MainBox = () => {
  const [allAlbum, setAllAlbum] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const albumData = await fetchMusic(1, 120);
      // console.log(albumData);
      const newAlbumData = albumData.filter((item) => {
        // console.log(item.songs.length);
        return item.songs.length > 1;
      });
      // console.log(newAlbumData);
      setAllAlbum(newAlbumData);
    };
    fetchData();
  }, []);

  return (
    <div style={{ marginBottom: "30px" }}>
      <BoxScroll
        allAlbum={allAlbum.slice(0, 12)}
        titleText="Charts: Top 20"
        description="The most played tracks on SoundCloud this week"
      />
      <BoxScroll
        allAlbum={allAlbum.slice(12, 24)}
        titleText="Charts: New & hot"
        description="Up-and-coming tracks on SoundCloud"
      />
      <BoxScroll
        allAlbum={allAlbum.slice(24, 36)}
        titleText="Artists You Should Know"
        description="Top tracks from artists similar to Prigya Queen"
      />

      <BoxScroll
        allAlbum={allAlbum.slice(36, 48)}
        titleText="Chill"
        description=""
      />
      <BoxScroll
        allAlbum={allAlbum.slice(48, 60)}
        titleText="For fans of YT MUSIC"
        description=""
      />
      {/* <BoxScroll
        allAlbum={allAlbum.slice(100, 120)}
        titleText="Workout"
        description=""
      />
      <BoxScroll
        allAlbum={allAlbum.slice(120, 140)}
        titleText="Feel Good"
        description=""
      />

      <BoxScroll
        allAlbum={allAlbum.slice(140, 160)}
        titleText="Music Therapy"
        description=""
      />
      <BoxScroll
        allAlbum={allAlbum.slice(160, 180)}
        titleText="Study"
        description=""
      />
      <BoxScroll
        allAlbum={allAlbum.slice(180, 200)}
        titleText="At Home"
        description=""
      /> */}
    </div>
  );
};

export default MainBox;
