import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import imgSignup from "../assets/signup.jpg";
import logo from "../assets/signup_logo.png";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const SignUp = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const boxStyle = {
    background: "white",
    backgroundImage: `url(${imgSignup})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    boxShadow: "inset 0 120px 40px -40px rgba(5,5,5,.5)",
    height: "450px",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#fff",
        light: "#fff",
        dark: "#fff",
      },
      secondary: {
        main: "#f50",
        light: "#f50",
        dark: "#f50",
      },
    },
  });

  return (
    <>
      <Container maxWidth="lg">
        <ThemeProvider theme={theme}>
          <Box sx={boxStyle}>
            <Box
              sx={{
                padding: "20px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <img style={{ width: "150px" }} src={logo} alt="" />
              </Box>
              <Stack spacing={2} direction="row">
                <Button onClick={handleOpen} variant="outlined">
                  Sign in
                </Button>
                <Button
                  onClick={handleOpen}
                  color="secondary"
                  variant="contained"
                >
                  Create account
                </Button>
                <Button variant="text">For Artists</Button>
              </Stack>
            </Box>
            <Box
              sx={{
                textAlign: "center",
                fontFamily:
                  "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                fontWeight: 100,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                height: "354px",
                justifyContent: "center",
              }}
            >
              <h2
                style={{
                  fontWeight: 100,
                  color: "#fff",
                  fontSize: "33px",
                }}
              >
                Connect on SoundCloud
              </h2>
              <p
                style={{
                  color: "#fff",
                  maxWidth: "530px",
                  margin: "10px",
                }}
              >
                Discover, stream, and share a constantly expanding mix of music
                from emerging and major artists around the world.
              </p>
              <Button
                onClick={handleOpen}
                sx={{ margin: "10px", padding: "10px", width: "210px" }}
                color="secondary"
                variant="contained"
              >
                Sign up for free
              </Button>
            </Box>
          </Box>
        </ThemeProvider>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </Container>
    </>
  );
};

export default SignUp;
