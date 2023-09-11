import axios from "axios";

export const fetchFavorites = async (songId) => {
  const storedToken = localStorage.getItem("authToken");
  try {
    const response = await axios.patch(
      `https://academics.newtonschool.co/api/v1/music/favorites/like`,
      { songId: songId },
      {
        headers: {
          Authorization: `Bearer ${storedToken}`,
          projectId: "wfxzay8vc8dn",
        },
      }
    );
    // console.log(songId);
    return response.data.data;
  } catch (error) {
    console.error("Error Favorites in Add/Remove API:", error);
  }
};
