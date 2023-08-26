import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import imgSignup from "../assets/signup.jpg";
import logo from "../assets/signup_logo.png";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Modal from "@mui/material/Modal";
import ChildModal from "../components/ChildModal";
import CloseIcon from "@mui/icons-material/Close";

const SignUp = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    bgcolor: "background.paper",
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
      facebook: {
        main: "#3578e5",
        light: "#3578e5",
        dark: "#3578e5",
      },
      apple: {
        main: "#000",
        light: "#000",
        dark: "#000",
      },
    },
  });

  const modelBtnStyle = {
    textTransform: "unset",
    padding: "7px 8px",
    marginBottom: "15px",
    boxShadow: "unset",
    fontFamily:
      "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
    // fontSize: "16px",
  };

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

          <Modal open={open} sx={{ bgcolor: "#f2f2f2e6" }}>
            <Box sx={style}>
              <div style={{ display: "flex", justifyContent: "end" }}>
                <CloseIcon onClick={handleClose} />
              </div>
              <Box sx={{ pt: 2, px: 3, pb: 3 }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Button
                    style={{
                      ...modelBtnStyle,
                      // background: "#3578e5",
                      border: "1px solid #3578e5",
                      color: "#fff",
                    }}
                    color="facebook"
                    variant="contained"
                  >
                    Continue with Facebook
                  </Button>
                  <Button
                    style={{
                      ...modelBtnStyle,
                      // background: "#fff",
                      border: "1px solid #ccc",
                      color: "#222",
                    }}
                    variant="contained"
                  >
                    Continue with Google
                  </Button>
                  <Button
                    style={{
                      ...modelBtnStyle,
                      // background: "#000",
                      border: "1px solid #000",
                      color: "#fff",
                    }}
                    color="apple"
                    variant="contained"
                  >
                    Continue with Apple
                  </Button>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <hr style={{ width: "45%" }} />{" "}
                  <span style={{ margin: "0 10px", fontSize: "20px" }}>or</span>
                  <hr style={{ width: "45%" }} />
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    id="email"
                    // onChange={handleLoginDetails}
                    // ref={emailRef}
                    // value={email}
                    className="textField"
                  />
                  <div id="email_error" /*ref={emailErrorRef}*/>
                    Please enter an email address
                  </div>

                  <input
                    type="password"
                    placeholder="Your Password"
                    id="password"
                    // onChange={handleLoginDetails}
                    // ref={passwordRef}
                    // value={password}
                    className="textField"
                  />
                  <div id="pass_error" /*ref={passwordErrorRef}*/>
                    Enter valid password
                  </div>

                  <Button
                    style={{
                      ...modelBtnStyle,
                      color: "#fff",
                      marginTop: "10px",
                    }}
                    color="secondary"
                    variant="contained"
                  >
                    Sign In
                  </Button>
                </Box>
                <ChildModal />
                <p
                  style={{
                    color: "#999",
                    fontSize: "14px",
                    textAlign: "justify",
                    lineHeight: "1.4",
                  }}
                >
                  When registering, you agree that we may use your provided data
                  for the registration and to send you notifications on our
                  products and services. You can unsubscribe from notifications
                  at any time in your settings. For additional info please refer
                  to our Privacy Policy.
                </p>
              </Box>
            </Box>
          </Modal>
        </ThemeProvider>
      </Container>
    </>
  );
};

export default SignUp;
