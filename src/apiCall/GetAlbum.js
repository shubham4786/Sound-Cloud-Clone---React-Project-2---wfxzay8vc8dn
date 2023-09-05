import axios from "axios";

export const fetchMusic = async (page, limit) => {
  try {
    const response = await axios.get(
      `https://academics.newtonschool.co/api/v1/music/album`,
      {
        headers: {
          projectId: "f104bi07c490",
        },
        params: {
          page: page,
          limit: limit,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    console.error("Error fetching data from the Album API:", error);
  }
};
