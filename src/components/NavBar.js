import { useState } from "react";
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
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const drawerWidth = 240;

const NavBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

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

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
    color: "#85A389",
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#7C9070",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "388px",
      },
    },
  }));

  /***********menu button*********** */
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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

            {/* <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              MUI
            </Typography> */}
            <Box
              sx={{ display: { xs: "none", sm: "flex" }, flexDirection: "row" }}
            >
              <div style={{ display: "flex" }}>
                <img src={logo} alt="logo" />

                <Box sx={{ display: "flex", width: 312 }}>
                  <Button sx={buttonStyle}>Home</Button>
                  <Button sx={buttonStyle}>Feed</Button>
                  <Button sx={buttonStyle}>Library</Button>
                </Box>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Search
                  sx={{
                    background: "#DDE6ED",
                    height: "28px",
                    maxWidth: "388px",
                  }}
                >
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                    sx={{ height: "28px", maxWidth: "388px", color: "#3a4a4a" }}
                  />
                </Search>
              </div>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ display: { sm: "none", md: "none", lg: "flex" } }}>
                  <Button
                    sx={buttonStyle}
                    style={{ border: "unset", width: "100px" }}
                  >
                    Try Next Pro
                  </Button>
                  <Button
                    sx={buttonStyle}
                    style={{ border: "unset", width: "85px" }}
                  >
                    For Artists
                  </Button>
                  <Button
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
                        alt="Remy Sharp"
                        src="Remy Sharp"
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
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                      <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                  </div>

                  <Tooltip title="No notifications" sx={{ width: 46 }}>
                    <IconButton>
                      <NotificationsIcon sx={{ color: "#ccc" }} />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="No messages" sx={{ width: 46 }}>
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
