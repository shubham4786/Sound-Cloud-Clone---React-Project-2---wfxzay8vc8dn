import { useState, useEffect } from "react";
import axios from "axios";
import BoxScroll from "./BoxScroll";

const MainBox = () => {
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

  return (
    <div>
      <BoxScroll songs={songs} />
      <BoxScroll songs={songs} />
      <BoxScroll songs={songs} />
      <BoxScroll songs={songs} />
      <BoxScroll songs={songs} />
      <BoxScroll songs={songs} />
      <BoxScroll songs={songs} />
      <BoxScroll songs={songs} />
      <BoxScroll songs={songs} />
      <BoxScroll songs={songs} />
    </div>
  );
};

export default MainBox;
