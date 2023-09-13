import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { fetchfilterSongs } from "../apiCall/GetSongs";

const SignUp = () => {
  const [songSignUp, setSongSignUp] = useState([]);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const [signin, setSignin] = useState({
    email: "",
    password: "",
  });

  const [signinStatus, setSigninStatus] = useState({
    success: false,
  });

  const emailErrorRef = useRef(null);
  const passwordErrorRef = useRef(null);

  const { email, password } = signin;

  const handleInput = (event) => {
    const field = event.target.id;
    const value = event.target.value;

    setSignin({
      ...signin,
      [field]: value,
    });

    if (field === "email") {
      emailErrorRef.current.style.display = "none";
    } else if (field === "password") {
      passwordErrorRef.current.style.display = "none";
    }
  };

  const handleSignin = async (event) => {
    event.preventDefault();

    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (!email.match(emailPattern)) {
      emailErrorRef.current.style.display = "block";
    }
    if (password.length < 5 || password.length > 60) {
      passwordErrorRef.current.style.display = "block";
    }
    try {
      const response = await axios.post(
        "https://academics.newtonschool.co/api/v1/user/login",
        {
          email,
          password,
          appType: "music",
        },
        {
          headers: {
            projectId: "wfxzay8vc8dn",
          },
        }
      );

      const token = response.data.token;

      const userName = response.data.data.name;
      const userEmail = response.data.data.email;
      const userPassword = response.data.data.password;

      const userDetails = {
        userName: userName,
        userEmail: userEmail,
        userPassword: userPassword,
      };
      //Used to persist token
      localStorage.setItem("authToken", token);

      //Used to persist userinfo
      localStorage.setItem("userInfo", JSON.stringify(userDetails));
      localStorage.removeItem("historySong");

      setSigninStatus({
        success: true,
      });

      toast.success("Signin Successfull.", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error("Login Error:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message === "User not found"
      ) {
        toast.error("User with this email is not registered.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        setSigninStatus({
          success: false,
        });
        toast.error("Email or password is incorrect", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  useEffect(() => {
    if (signinStatus.success) {
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    }
  }, [signinStatus]);

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
    width: { xs: "90%", sm: "70%", md: "45%", lg: "38%" },
    bgcolor: "background.paper",
    borderRadius: "6px",
  };

  const boxStyle = {
    background: "white",
    backgroundImage: `url(${imgSignup})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    boxShadow: "inset 0 120px 40px -40px rgba(5,5,5,.5)",
    height: "450px",
    borderTop: "4px solid #f50",
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

  useEffect(() => {
    const fetchData = async () => {
      const songData = await fetchfilterSongs(3, 10);
      setSongSignUp(songData);
    };
    fetchData();
  }, []);
  // console.log(songSignUp);

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
                flexWrap: "wrap",
              }}
            >
              <Box>
                <img style={{ width: "150px" }} src={logo} alt="" />
              </Box>
              <Stack
                sx={{ display: "flex", flexWrap: "wrap" }}
                spacing={2}
                direction="row"
              >
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
                {/* <Button sx={{ cursor: "unset" }} variant="text">
                  For Artists
                </Button> */}
              </Stack>
            </Box>
            <Box
              sx={{
                textAlign: "center",
                fontFamily:
                  "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                fontWeight: 100,
                display: "flex",
                // display: "none",
                alignItems: "center",
                flexDirection: "column",
                // height: "354px",
                justifyContent: "center",
              }}
            >
              <ToastContainer />
              <h2
                style={{
                  fontWeight: 100,
                  color: "#b59797",
                  fontSize: "27px",
                }}
              >
                Connect on SoundCloud
              </h2>
              <p
                style={{
                  color: "#b59797",
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
          <Box sx={{ background: "white" }}>
            <h1
              style={{
                fontSize: "24px",
                textAlign: "center",
                paddingTop: "20px",
                marginBottom: "20px",
              }}
            >
              Hear what’s trending for free in the SoundCloud community
            </h1>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
              }}
            >
              {songSignUp.map((item) => (
                <Button
                  key={item._id}
                  // onClick={() => albumData(props)}
                  onClick={handleOpen}
                  sx={{
                    width: 173,
                    display: "flex",
                    flexDirection: "column",
                    margin: "10px",
                  }}
                >
                  <div>
                    <img
                      style={{ width: 173, height: 173 }}
                      src={item.thumbnail}
                      alt=""
                    />
                  </div>
                  <div>
                    <h5 style={{ color: "#000" }}>{item.title}</h5>
                  </div>
                </Button>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              background: "white",
              height: "350px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 style={{ padding: "10px" }}>
              Thanks for listening. Now join in.
            </h1>
            <h2 style={{ padding: "10px" }}>
              Save tracks, follow artists and build playlists. All for free.
            </h2>
            <Button
              onClick={handleOpen}
              style={{ margin: "10px" }}
              color="secondary"
              variant="contained"
            >
              Create account
            </Button>
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

          <Modal open={open} sx={{ bgcolor: "#f2f2f2e6" }}>
            <Box sx={style}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  margin: "3px 3px 0 0",
                }}
              >
                <CloseIcon onClick={handleClose} />
              </div>
              <h1 style={{ textAlign: "center", padding: "5px" }}>Sign In</h1>
              <Box sx={{ px: 3, pb: 3 }}>
                {/* <Box sx={{ display: "flex", flexDirection: "column" }}>
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
                </Box> */}

                <Box>
                  <form
                    onSubmit={handleSignin}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <input
                      type="email"
                      placeholder="Your email address"
                      id="email"
                      onChange={handleInput}
                      // ref={emailRef}
                      value={email}
                      className="textField"
                    />
                    <div id="email_error" ref={emailErrorRef}>
                      Please enter an email address
                    </div>

                    <input
                      type="password"
                      placeholder="Your Password"
                      id="password"
                      onChange={handleInput}
                      // ref={passwordRef}
                      value={password}
                      className="textField"
                    />
                    <div id="pass_error" ref={passwordErrorRef}>
                      Enter valid password
                    </div>

                    <Button
                      type="submit"
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
                  </form>
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
