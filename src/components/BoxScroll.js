import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MusicAlbum from "./MusicAlbum";
import { responsive } from "./ResponsiveScrollBox";

const BoxScroll = () => {
  const [songs, setSongs] = useState([]);

  const fetchMusic = async (filter, page) => {
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/music/song`,
        {
          headers: {
            projectId: "f104bi07c490",
          },
          // params: {
          //   filter: JSON.stringify(filter),
          //   page: page,
          //   limit: 5,
          // },
        }
      );

      return response.data.data;
    } catch (error) {
      console.error("Error fetching data from the API:", error);
    }
  };

  useEffect(() => {
    const fetchTop50 = async () => {
      const top50Data = await fetchMusic({ type: "web series" }, 1);
      setSongs(top50Data);
    };
    fetchTop50();
  }, []);

  const product = songs.map((item) => <MusicAlbum item={item} />);

  return (
    <>
      <div style={{ margin: 10 }}>
        <div style={{ textAlign: "left", paddingLeft: 10, padding: 20 }}>
          <h2 style={{ fontSize: 24, fontWeight: 100 }}>Charts: Top 50</h2>
          <p style={{ fontWeight: 100, color: "#999" }}>
            The most played tracks on SoundCloud this week
          </p>
        </div>
        <div>
          <Carousel responsive={responsive}>{product}</Carousel>
        </div>
      </div>
    </>
  );
};

export default BoxScroll;
