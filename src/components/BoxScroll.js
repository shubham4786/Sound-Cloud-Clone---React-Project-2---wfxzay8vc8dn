import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MusicAlbum from "./MusicAlbum";
import { productData, responsive } from "./ResponsiveScrollBox";

const BoxScroll = () => {
  const product = productData.map((item) => (
    <MusicAlbum
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));
  return (
    <div>
      <Carousel responsive={responsive}>{product}</Carousel>
    </div>
  );
};

export default BoxScroll;
