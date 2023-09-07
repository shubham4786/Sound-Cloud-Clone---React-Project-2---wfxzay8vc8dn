import React, { useContext, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
// import AudioPlayer from "../components/AudioPlayer";
import { MyContext } from "../MyContext";
import AsideBox from "../components/AsideBox";
import SongListBox from "../components/SongListBox";

const PlayList = () => {
  const {
    setCurrentTrackIndex,
    currentTrackIndex,
    setIsPlaying,
    songList,
    setSongList,
  } = useContext(MyContext);
  const albumData = songList.data;
  const songs = albumData.songs;

  // console.log(albumData);

  const handleSong = (index) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  useEffect(() => {
    setSongList(JSON.parse(localStorage.getItem("albumData")));
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Container maxWidth="xl" sx={{ paddingTop: "45px", marginBottom: "50px" }}>
      <Box sx={{ margin: "0 24px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
            background:
              "linear-gradient(135deg, rgb(187, 190, 188) 0%, rgb(112, 134, 137) 100%)",
          }}
        >
          <Box sx={{ margin: "20px 70px" }}>
            <h1>{albumData?.title}</h1>
            <h2>SoundCloud</h2>
            <p style={{ textTransform: "capitalize" }}>
              {albumData?.description}
            </p>
          </Box>
          <Box sx={{ background: " black", width: "25vw", height: "25vw" }}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={albumData?.image}
              alt=""
            />
          </Box>
        </Box>
        <Box>
          <Grid container>
            <Grid item xs={8}>
              <Item>
                <Box>
                  <List>
                    {songs?.map((song, index) => (
                      <SongListBox
                        key={index}
                        song={song}
                        index={index}
                        onClick={handleSong}
                      />
                    ))}
                  </List>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item sx={{ height: "100%" }}>
                <AsideBox />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default PlayList;
