import React, { useContext } from "react";
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

const PlayList = () => {
  const albumData = JSON.parse(localStorage.getItem("albumData"));
  const songs = albumData.data.songs;

  const { setCurrentTrackIndex, setIsPlaying } = useContext(MyContext);

  const handleSong = (index) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

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
          <Box>
            <h1>{albumData.data.title}</h1>
            <h2>SoundCloud</h2>
          </Box>
          <Box sx={{ background: " black", width: "25vw", height: "25vw" }}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={albumData.data.image}
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
                    {songs.map((song, index) => (
                      <Box key={index}>
                        <ListItem button onClick={() => handleSong(index)}>
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
                            <span>{song.title}</span>
                          </Box>
                        </ListItem>
                        <Divider light />
                      </Box>
                    ))}
                  </List>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>xs=4</Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default PlayList;
