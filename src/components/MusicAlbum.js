import React from "react";
import { Button } from "@mui/material";

const MusicAlbum = (props) => {
  // console.log(props.item);
  return (
    <Button
      sx={{
        width: 173,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div key={props.item._id}>
        <img
          style={{ width: 173, height: 173 }}
          src={props.item.thumbnail}
          alt=""
        />
      </div>
      <div>
        <h5>{props.item.title}</h5>
      </div>
    </Button>
  );
};

export default MusicAlbum;
