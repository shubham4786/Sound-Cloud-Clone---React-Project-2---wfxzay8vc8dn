import React, { useEffect, useState } from "react";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { fetchFavorites } from "../apiCall/patchLike";
// import { MyContext } from "../MyContext";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";

const SongListBox = ({ song, index, onClick }) => {
  // const { isLike, setIsLike } = useContext(MyContext);
  const [likes, setLikes] = useState(false);
  const [likeColor, setLikeColor] = useState("#c1bdbd");
  const [showAlert, setShowAlert] = useState(false);

  const handleLikeBtn = (songId) => {
    fetchFavorites(songId);
    setLikes(!likes);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  useEffect(() => {
    setLikeColor(likes ? "#f50" : "#c1bdbd");
  }, [likes]);

  const buttonStyle = () => ({
    // padding: "10px",
    marginTop: "14px",
    border: `1px solid ${likeColor}`,
  });
  return (
    <Box key={index}>
      {showAlert && (
        <div className="alert">
          {likes ? (
            <h4
              style={{ background: "#f50", padding: "8px", color: "#e9e7e4" }}
            >
              You liked song {song.title}!
            </h4>
          ) : (
            <h4
              style={{
                background: "#c1bdbd",
                padding: "8px",
                color: "#342f24",
              }}
            >
              You unliked song {song.title}!
            </h4>
          )}
        </div>
      )}
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
            <Button sx={buttonStyle} onClick={() => handleLikeBtn(song._id)}>
              <FavoriteSharpIcon sx={{ color: likeColor }} />
            </Button>
          </Box>
        </Box>
      </ListItem>
      <Divider light />
    </Box>
  );
};

export default SongListBox;
