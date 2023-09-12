import React, { useContext } from "react";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { fetchFavorites } from "../apiCall/patchLike";
import { MyContext } from "../MyContext";

const SongListBox = ({ song, index, onClick, text = "Add To Favorite" }) => {
  const { isLike, setIsLike } = useContext(MyContext);

  const handleLikeBtn = (songId, text) => {
    fetchFavorites(songId);
    setIsLike(!isLike);
  };

  const buttonStyle = () => ({
    color: "#211f1f",
    display: "flex",
    textTransform: "none",
    lineHeight: 1,
    fontSize: "0.8rem",
    padding: "10px",
    flexWrap: "wrap",
    marginTop: "14px",
  });
  return (
    <Box key={index}>
      <ListItem>
        <Box sx={{ display: "flex", paddingLeft: "20px", flexWrap: "wrap" }}>
          <Box
            onClick={() => onClick(index)}
            sx={{
              background: " black",
              width: "150px",
              height: "150px",
              cursor: "pointer",
            }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={song.thumbnail}
              alt=""
            />
          </Box>
          <Box sx={{ padding: "15px " }}>
            <Box
              onClick={() => onClick(index)}
              sx={{
                cursor: "pointer",
                textTransform: "capitalize",
              }}
            >
              <h2>{song.title}</h2>
              <h5>{song.mood}</h5>
            </Box>
            <Button
              sx={buttonStyle}
              onClick={() => handleLikeBtn(song._id, text)}
            >
              <span style={{ fontWeight: "600" }}>{text}</span>
            </Button>
          </Box>
        </Box>
      </ListItem>
      <Divider light />
    </Box>
  );
};

export default SongListBox;
