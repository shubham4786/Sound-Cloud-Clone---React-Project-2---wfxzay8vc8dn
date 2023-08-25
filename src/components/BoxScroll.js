import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MusicAlbum from "./MusicAlbum";
import { responsive } from "./ResponsiveScrollBox";

const BoxScroll = ({ songs }) => {
  const product = songs.map((item, index) => (
    <MusicAlbum key={index} item={item} />
  ));

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
