import React, { useRef, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChildModal = () => {
  const [open, setOpen] = useState(false);
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [signupStatus, setSignupStatus] = useState({
    success: false,
  });

  const nameErrorRef = useRef(null);
  const emailErrorRef = useRef(null);
  const passwordErrorRef = useRef(null);

  const handleInput = (event) => {
    const field = event.target.id;
    let value = event.target.value;

    if (field === "email") {
      value = value.toLowerCase();
    }
    // console.log(signup.email);

    setSignup({
      ...signup,
      [field]: value,
    });

    if (field === "name") {
      nameErrorRef.current.style.display = "none";
    } else if (field === "email") {
      emailErrorRef.current.style.display = "none";
    } else if (field === "password") {
      passwordErrorRef.current.style.display = "none";
    }
  };

  const { name, email, password } = signup;

  const handlesignup = async (event) => {
    event.preventDefault();

    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (name.length < 3) {
      nameErrorRef.current.style.display = "block";
    }
    if (!email.match(emailPattern)) {
      emailErrorRef.current.style.display = "block";
    }
    if (password.length < 5 || password.length > 60) {
      passwordErrorRef.current.style.display = "block";
    }
    try {
      // console.log("Sending signup request...");
      const response = await axios.post(
        "https://academics.newtonschool.co/api/v1/user/signup",
        {
          name: name,
          email: email,
          password: password,
          appType: "music",
        },
        {
          headers: {
            projectId: "f104bi07c490",
          },
        }
      );
      // console.log("Signup successful:", response);

      setSignupStatus({
        success: true,
      });
      toast.success("Account successfully Registered!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log("Signup Error:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message === "User already exists"
      ) {
        setSignupStatus({
          success: false,
        });
        toast.error("User with this email is already registered.", {
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
        setSignupStatus({
          success: false,
        });
        toast.error("Error in signing up. Please try again.", {
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
    if (signupStatus.success) {
      setTimeout(() => {
        // navigate("/signin");
        handleClose();
      }, 3500);
    }
  }, [signupStatus]);

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
    <React.Fragment>
      <Box sx={{ textAlign: "center" }}>
        <span>Don't have an account?</span>
        <Button
          style={{
            textTransform: "unset",
            boxShadow: "unset",
            color: "#0a66c2",
            fontWeight: "600",
            padding: " 0 8px",
          }}
          onClick={handleOpen}
        >
          Sign Up
        </Button>
      </Box>
      <Modal open={open}>
        <Box sx={style}>
          {/* <ToastContainer /> */}
          <div style={{ display: "flex", justifyContent: "end" }}>
            <CloseIcon onClick={handleClose} />
          </div>

          <h1 style={{ textAlign: "center", padding: "10px" }}>Sign Up</h1>
          <Box sx={{ px: 3, pb: 2 }}>
            <Box>
              <form
                style={{ display: "flex", flexDirection: "column" }}
                // onChange={handleInput}
                onSubmit={handlesignup}
              >
                <input
                  type="text"
                  placeholder="Name"
                  id="name"
                  onChange={handleInput}
                  value={name}
                />
                <div id="name_error" ref={nameErrorRef}>
                  Please enter a valid name.
                </div>

                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  onChange={handleInput}
                  value={email}
                />
                <div id="email_error" ref={emailErrorRef}>
                  Please enter a valid email address.
                </div>

                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={handleInput}
                  value={password}
                />
                <div id="pass_error" ref={passwordErrorRef}>
                  Password must contain atleast 6 characters
                </div>

                <Button
                  type="submit"
                  style={{
                    ...modelBtnStyle,
                    color: "#fff",
                    marginTop: "15px",
                  }}
                  color="secondary"
                  variant="contained"
                >
                  Sign Up
                </Button>
              </form>
            </Box>

            <Box sx={{ textAlign: "center", paddingBottom: "10px" }}>
              <span>Already have an account?</span>
              <Button
                style={{
                  textTransform: "unset",
                  boxShadow: "unset",
                  color: "#0a66c2",
                  fontWeight: "600",
                  padding: " 0 8px",
                }}
                onClick={handleClose}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default ChildModal;
