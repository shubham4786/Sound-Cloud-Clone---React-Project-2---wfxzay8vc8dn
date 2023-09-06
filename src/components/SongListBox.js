import React from "react";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

const SongListBox = ({ song, index, onClick }) => {
  return (
    <Box key={index}>
      <ListItem button onClick={() => onClick(index)}>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              background: " black",
              width: "10vw",
              height: "10vw",
            }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={song.thumbnail}
              alt=""
            />
          </Box>
          <Box sx={{ textTransform: "capitalize" }}>
            <h2>{song.title}</h2>
            <h5>{song.mood}</h5>
          </Box>
        </Box>
      </ListItem>
      <Divider light />
    </Box>
  );
};

export default SongListBox;
