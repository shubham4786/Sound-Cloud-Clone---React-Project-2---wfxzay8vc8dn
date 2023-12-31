import React, { useState, useEffect, useContext } from "react";
import Container from "@mui/material/Container";
import { MyContext } from "../MyContext";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import AsideBox from "../components/AsideBox";
import { fetchSongs } from "../apiCall/GetSongs";
import SongListBox from "../components/SongListBox";

const Feed = () => {
  const { setCurrentTrackIndex, setIsPlaying, setSongList, searchedHideRef } =
    useContext(MyContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const songData = await fetchSongs(page, 5);

      const data = songData;

      setItems((prevItems) => [...prevItems, ...data]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (items) {
      // console.log(items);
      localStorage.setItem(
        "albumData",
        JSON.stringify({
          data: { songs: items },
        })
      );
    }
    // setSongList(JSON.parse(localStorage.getItem("albumData")));
    // setPlayHistory(JSON.parse(localStorage.getItem("historySong")));
  }, [items]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    fetchData();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  const handleSong = (index) => {
    // console.log(index);
    setSongList(JSON.parse(localStorage.getItem("albumData")));
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
    <Container
      maxWidth="xl"
      ref={searchedHideRef}
      sx={{ paddingTop: "45px", marginBottom: "50px" }}
    >
      <Box sx={{ margin: "0 24px" }}>
        <Box sx={{ background: "white" }}>
          <h1
            style={{
              fontSize: "24px",
              textAlign: "center",
              paddingTop: "20px",
              marginBottom: "20px",
              color: "#a5a1a1",
            }}
          >
            Hear what’s trending for free in the SoundCloud community
          </h1>
          <Box>
            <Grid container>
              <Grid item xs={12} sm={12} md={8} lg={8}>
                <Item>
                  <Box>
                    <List>
                      {items?.map((song, index) => (
                        <SongListBox
                          key={index}
                          song={song}
                          index={index}
                          onClick={handleSong}
                        />
                      ))}
                    </List>
                    {isLoading && <p>Loading...</p>}
                    {error && <p>Error: {error.message}</p>}
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item sx={{ position: "fixed", width: "30%" }}>
                  <AsideBox />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Feed;
