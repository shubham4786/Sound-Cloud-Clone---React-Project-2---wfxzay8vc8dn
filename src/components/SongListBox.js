import React, { useState, useEffect, useContext } from "react";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { fetchFavorites } from "../apiCall/patchLike";
import { MyContext } from "../MyContext";

const SongListBox = ({ song, index, onClick }) => {
  const { isLike, setIsLike } = useContext(MyContext);
  const [likes, setLikes] = useState(false);
  const [likeColor, setLikeColor] = useState("black");
  const [likesCount, setLikesCount] = useState();

  const handleLikeBtn = (songId) => {
    // console.log(showId);
    const addRemove = fetchFavorites(songId);
    // setIsLike(!isLike);
    setLikes(!likes);
    // console.log(addRemove);
  };

  useEffect(() => {
    setLikeColor(likes ? "#f50" : "black");
  }, [likes]);

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
        <Box sx={{ display: "flex", paddingLeft: "20px" }}>
          <Box
            onClick={() => onClick(index)}
            sx={{
              background: " black",
              width: "10vw",
              height: "10vw",
              cursor: "pointer",
            }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={song.thumbnail}
              alt=""
            />
          </Box>
          <Box sx={{ padding: "15px 40px " }}>
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
            <Button sx={buttonStyle} onClick={() => handleLikeBtn(song._id)}>
              {/* <span> {likesCount} </span> */}

              <ThumbUpAltIcon sx={{ padding: "0 5px", color: likeColor }} />
              <span style={{ color: likeColor, fontWeight: "600" }}>Like</span>
            </Button>
          </Box>
        </Box>
      </ListItem>
      <Divider light />
    </Box>
  );
};

export default SongListBox;
