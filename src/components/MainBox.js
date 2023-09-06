import { useState, useEffect } from "react";
import axios from "axios";
import BoxScroll from "./BoxScroll";
import { fetchMusic } from "../apiCall/GetAlbum";

const MainBox = () => {
  const [allAlbum, setAllAlbum] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const albumData = await fetchMusic(1, 200);
      // console.log(albumData);
      setAllAlbum(albumData);
    };
    fetchData();
  }, []);

  return (
    <div style={{ marginBottom: "30px" }}>
      <BoxScroll
        allAlbum={allAlbum.slice(0, 20)}
        titleText="Charts: Top 20"
        description="The most played tracks on SoundCloud this week"
      />
      <BoxScroll
        allAlbum={allAlbum.slice(20, 40)}
        titleText="Charts: New & hot"
        description="Up-and-coming tracks on SoundCloud"
      />
      <BoxScroll
        allAlbum={allAlbum.slice(40, 60)}
        titleText="Artists You Should Know"
        description="Top tracks from artists similar to Prigya Queen"
      />

      <BoxScroll
        allAlbum={allAlbum.slice(60, 80)}
        titleText="Chill"
        description=""
      />
      <BoxScroll
        allAlbum={allAlbum.slice(80, 100)}
        titleText="For fans of YT MUSIC"
        description=""
      />
      <BoxScroll
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
      />
    </div>
  );
};

export default MainBox;
