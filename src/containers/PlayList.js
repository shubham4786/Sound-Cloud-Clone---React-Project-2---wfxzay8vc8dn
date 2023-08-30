import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const PlayList = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Container maxWidth="xl" sx={{ paddingTop: "45px" }}>
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
            <h1>New & hot</h1>
            <h2>SoundCloud</h2>
          </Box>
          <Box
            sx={{ background: " black", width: "25vw", height: "25vw" }}
          ></Box>
        </Box>
        <Box>
          <Grid container>
            <Grid item xs={8}>
              <Item>
                <Box>
                  <List>
                    <ListItem button onClick={() => console.log("Song")}>
                      <ListItemText primary="Trash" />
                    </ListItem>
                    <Divider light />
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
