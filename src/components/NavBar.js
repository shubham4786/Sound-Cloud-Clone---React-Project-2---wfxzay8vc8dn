import { useState, useEffect, useRef, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import logo from "../assets/logo.png";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SongListBox from "./SongListBox";
import { MyContext } from "../MyContext";

const drawerWidth = 240;

const NavBar = (props) => {
  const {
    setCurrentTrackIndex,
    setIsPlaying,
    setSongList,
    songList,
    setPlayHistory,
    searchedHideRef,
  } = useContext(MyContext);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [searchInput, setSearchInput] = useState("");
  const [searchedSongs, setSearchedSongs] = useState([]);

  // const { setSearching } = useContext(SearchContext);
  const searchContainerRef = useRef(null);
  const searchSongsRef = useRef([]);

  const fetchSeachSongs = async () => {
    try {
      const response = await axios.get(
        "https://academics.newtonschool.co/api/v1/music/song",
        {
          headers: {
            projectId: "f104bi07c490",
          },
        }
      );
      searchSongsRef.current = response.data.data;
      // console.log("setting", searchSongsRef.current);
      // console.log("searchSongs", searchSongsRef.current);
      const searchResult = searchSongsRef.current.filter((song) =>
        song.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSearchedSongs(searchResult);
      // console.log(searchResult);
      // console.log("response", response.data.data);
    } catch (error) {
      console.error("Error fetching data from search:", error);
    }
  };

  const inputValueHandler = (event) => {
    setSearchInput(event.target.value);
    // console.log("search value:", event.target.value);
    if (event.target.value) {
      fetchSeachSongs();
      searchContainerRef.current.style.display = "block";
      searchedHideRef.current.style.display = "none";
      //   // setSearching(false);
    } else {
      searchContainerRef.current.style.display = "none";
      searchedHideRef.current.style.display = "block";
      searchSongsRef.current = [];
      //   // setSearching(true);
    }
  };

  const handleSong = (index) => {
    // console.log(JSON.parse(localStorage.getItem("albumData")));
    const newData = {
      data: {
        songs: searchedSongs,
      },
    };
    // console.log(newData);
    setSongList(newData);
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userInfo")));
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {/* {navItems.map((item) => ( */}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>home</ListItemText>
          </ListItemButton>
        </ListItem>
        {/* ))} */}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const buttonStyle = {
    height: "46px",
    width: "100%",
    fontFamily: "Interstate,Lucida Grande,Arial,sans-serif",
    fontWeight: 100,
    fontSize: "14px",
    textTransform: "none",
    padding: "12px 0",
    color: "#ccc",
    border: "1px solid #111",
    borderRadius: "unset",
  };

  /***********menu button*********** */
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    navigate("/profile");
    handleClose();
  };

  const handleSignOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userInfo");
    navigate("/");
  };
  return (
    <>
      <AppBar component="nav" sx={{ background: "#333", boxShadow: "none" }}>
        <Container maxWidth="1200px">
          <Toolbar sx={{ minHeight: "46px" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Box
              sx={{
                width: "100%",
                display: { xs: "none", sm: "flex" },
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <img
                  onClick={() => {
                    navigate("/home");
                  }}
                  src={logo}
                  alt="logo"
                  style={{ cursor: "pointer" }}
                />

                <Box sx={{ display: "flex", width: 312 }}>
                  <Button
                    onClick={() => {
                      navigate("/home");
                    }}
                    sx={buttonStyle}
                  >
                    Home
                  </Button>
                  <Button
                    onClick={() => {
                      navigate("/feed");
                    }}
                    sx={buttonStyle}
                  >
                    Feed
                  </Button>
                  <Button
                    onClick={() => {
                      navigate("/library");
                    }}
                    sx={buttonStyle}
                  >
                    Library
                  </Button>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <FormControl
                  sx={{ ml: 2, mr: 2, width: "100%" }}
                  variant="outlined"
                >
                  <OutlinedInput
                    value={searchInput}
                    onChange={inputValueHandler}
                    sx={{ background: "#e5e5e5" }}
                    placeholder="Search"
                    id="outlined-adornment-weight"
                    endAdornment={
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "weight",
                    }}
                  />
                </FormControl>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Box sx={{ display: { sm: "none", md: "none", lg: "flex" } }}>
                  <Button
                    onClick={() => {
                      navigate("/working");
                    }}
                    sx={buttonStyle}
                    style={{ border: "unset", width: "100px" }}
                  >
                    Try Next Pro
                  </Button>
                  <Button
                    onClick={() => {
                      navigate("/working");
                    }}
                    sx={buttonStyle}
                    style={{ border: "unset", width: "85px" }}
                  >
                    For Artists
                  </Button>
                  <Button
                    onClick={() => {
                      navigate("/working");
                    }}
                    sx={buttonStyle}
                    style={{ border: "unset", width: "65px" }}
                  >
                    Upload
                  </Button>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <div style={{ height: "100%" }}>
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      sx={{ height: "100%" }}
                    >
                      <Avatar
                        alt={user.userName}
                        src={user.userName}
                        sx={{ width: 30, height: 30 }}
                      />
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={handleProfile}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                      <MenuItem onClick={handleSignOut}>Logout</MenuItem>
                    </Menu>
                  </div>

                  <Tooltip
                    title="No notifications"
                    sx={{ width: 46, cursor: "unset" }}
                  >
                    <IconButton>
                      <NotificationsIcon sx={{ color: "#ccc" }} />
                    </IconButton>
                  </Tooltip>

                  <Tooltip
                    title="No messages"
                    sx={{ width: 46, cursor: "unset" }}
                  >
                    <IconButton>
                      <EmailIcon sx={{ color: "#ccc" }} />
                    </IconButton>
                  </Tooltip>
                </Box>
                <Box
                  sx={{
                    width: 46,
                    height: 46,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MoreHorizIcon
                    sx={{ width: 35, height: 35, color: "#ccc" }}
                  />
                </Box>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="lg">
        <Box sx={{ margin: "0 24px" }}>
          <Box sx={{ background: "white" }}>
            <div
              className="searchSuggestionsContainer"
              ref={searchContainerRef}
            >
              <div style={{ overflowX: "hidden" }}>
                {searchedSongs.map((song, index) => (
                  <SongListBox
                    key={index}
                    song={song}
                    index={index}
                    onClick={handleSong}
                  />
                ))}
              </div>
            </div>
          </Box>
        </Box>
      </Container>
      {/*****************mobile********************* */}
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default NavBar;
