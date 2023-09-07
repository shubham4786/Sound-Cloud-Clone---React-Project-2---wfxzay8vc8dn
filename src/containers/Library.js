import React, { useState, useContext, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { MyContext } from "../MyContext";
import { fetchMyList } from "../apiCall/GetLike";
import SongListBox from "../components/SongListBox";
import Button from "@mui/material/Button";

const Library = () => {
  const [value, setValue] = useState(0);
  const { playHistory, setPlayHistory, isLike, setIsLike } =
    useContext(MyContext);
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const favorites = await fetchMyList();
      // console.log(favorites);
      setMyList(favorites);
    };
    fetchData();
  }, [isLike]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Box>{children}</Box>
          </Box>
        )}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function tabIndex(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const tabStyle = {
    fontSize: "22px",
    fontWeight: 500,
    textTransform: "capitalize",
    color: "#333",
  };
  const tabPanel = {
    minHeight: "80vh",
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
    <Container maxWidth="xl" sx={{ paddingTop: "45px", marginBottom: "50px" }}>
      <Box sx={{ margin: "0 24px" }}>
        <Box sx={{ background: "white" }}>
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                paddingTop: "20px",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab sx={tabStyle} label="Likes" {...tabIndex(0)} />
                <Tab sx={tabStyle} label="History" {...tabIndex(1)} />
                <Tab sx={tabStyle} label="Upload" {...tabIndex(2)} />
              </Tabs>
            </Box>
            <CustomTabPanel style={tabPanel} value={value} index={0}>
              {myList?.map((song, index) => (
                // <SongListBox
                //   key={index}
                //   song={song}
                //   index={index}
                //   // onClick={handleSong}
                // />
                <Box sx={{ display: "flex", paddingLeft: "20px" }}>
                  <Box
                    // onClick={() => onClick(index)}
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
                      // onClick={() => onClick(index)}
                      sx={{
                        cursor: "pointer",
                        textTransform: "capitalize",
                      }}
                    >
                      <h2>{song.title}</h2>
                      <h5>{song.mood}</h5>
                    </Box>
                    <Button
                      sx={
                        buttonStyle
                      } /*onClick={() => handleLikeBtn(song._id)}*/
                    >
                      {/* <span> {likesCount} </span> */}

                      {/* <ThumbUpAltIcon sx={{ padding: "0 5px", color: likeColor }} /> */}
                      {/* <span style={{ color: likeColor, fontWeight: "600" }}>
                        Like
                      </span> */}
                    </Button>
                  </Box>
                </Box>
              ))}
            </CustomTabPanel>
            <CustomTabPanel style={tabPanel} value={value} index={1}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                  padding: "20px",
                }}
              >
                {playHistory?.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 173,
                      display: "flex",
                      flexDirection: "column",
                      margin: "12px",
                    }}
                  >
                    <div>
                      <img
                        style={{ width: 173, height: 173 }}
                        src={item?.thumbnail}
                        alt=""
                      />
                    </div>
                    <div>
                      <h5 style={{ textAlign: "center" }}>{item?.title}</h5>
                    </div>
                  </Box>
                ))}
              </Box>
            </CustomTabPanel>
            <CustomTabPanel style={tabPanel} value={value} index={2}>
              Item Two
            </CustomTabPanel>
          </Box>

          <Box
            sx={{
              background: "white",
              padding: "20px",
              borderTop: "1px solid #f2f2f2",
            }}
          >
            <Box sx={{ color: "#ccc", padding: "10px" }}>
              <span style={{ padding: "5px" }}> About us </span>
              <span style={{ padding: "5px" }}> Artist Resources</span>
              <span style={{ padding: "5px" }}> Blog </span>
              <span style={{ padding: "5px" }}>Jobs </span>
              <span style={{ padding: "5px" }}> Developers </span>
              <span style={{ padding: "5px" }}>Help </span>
              <span style={{ padding: "5px" }}> Legal </span>
              <span style={{ padding: "5px" }}> Privacy </span>
              <span style={{ padding: "5px" }}> Cookie Policy </span>
              <span style={{ padding: "5px" }}> Consent Manager </span>
              <span style={{ padding: "5px" }}> Imprint </span>
              <span style={{ padding: "5px" }}> Charts</span>
            </Box>
            <Box sx={{ padding: "10px " }}>
              <span style={{ padding: "5px" }}>Language: English (US)</span>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Library;
