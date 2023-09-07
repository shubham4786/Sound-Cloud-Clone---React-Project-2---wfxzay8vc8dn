import axios from "axios";

export const fetchMyList = async () => {
  const storedToken = localStorage.getItem("authToken");
  try {
    const response = await axios.get(
      "https://academics.newtonschool.co/api/v1/music/favorites/like",
      {
        headers: {
          Authorization: `Bearer ${storedToken}`,
          projectId: "f104bi07c490",
        },
      }
    );
    // console.log(response.data.data.songs);
    return response.data.data.songs;
  } catch (error) {
    console.error("Error fetching myList data from the API:", error);
  }
};
