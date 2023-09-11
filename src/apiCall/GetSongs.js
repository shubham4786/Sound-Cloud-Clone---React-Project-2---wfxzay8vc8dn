import axios from "axios";

export const fetchSongs = async (page, limit) => {
  try {
    const response = await axios.get(
      `https://academics.newtonschool.co/api/v1/music/song`,
      {
        headers: {
          projectId: "wfxzay8vc8dn",
        },
        params: {
          page: page,
          limit: limit,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    console.error("Error fetching data from the Songs API:", error);
  }
};

export const fetchfilterSongs = async (page, limit) => {
  try {
    const response = await axios.get(
      `https://academics.newtonschool.co/api/v1/music/song`,
      {
        headers: {
          projectId: "wfxzay8vc8dn",
        },
        params: {
          page: page,
          limit: limit,
          filter: `{"featured": "Trending songs"}`,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    console.error("Error fetching data from the Songs API:", error);
  }
};
