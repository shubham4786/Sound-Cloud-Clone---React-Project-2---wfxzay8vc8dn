import React, { useContext } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../MyContext";

const MusicAlbum = (props) => {
  // console.log(props.item);
  const { setIsPlaying, setSongList } = useContext(MyContext);
  const navigate = useNavigate();

  const albumData = (props) => {
    localStorage.setItem(
      "albumData",
      JSON.stringify({
        data: props.item,
      })
    );
    setSongList(JSON.parse(localStorage.getItem("albumData")));
    navigate("/playlist");
    setIsPlaying(true);
  };
  return (
    <Button
      onClick={() => albumData(props)}
      sx={{
        width: 173,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div key={props.item._id}>
        <img
          style={{ width: 173, height: 173 }}
          src={props.item.image}
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
