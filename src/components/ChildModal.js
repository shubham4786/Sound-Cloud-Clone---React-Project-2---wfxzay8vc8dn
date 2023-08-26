import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

const ChildModal = () => {
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
          <div style={{ display: "flex", justifyContent: "end" }}>
            <CloseIcon onClick={handleClose} />
          </div>

          <h1 style={{ textAlign: "center", padding: "10px" }}>Sign Up</h1>
          <Box sx={{ px: 3, pb: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <input
                type="text"
                placeholder="Name"
                id="name"
                // onChange={handleSignupDetails}
                // value={name}
              />
              <div id="name_error" /*ref={nameErrorRef}*/>
                Enter your valid name
              </div>

              <input
                type="email"
                placeholder="Email"
                id="email"
                // onChange={handleSignupDetails}
                // value={email}
              />
              <div id="email_error" /*ref={emailErrorRef}*/>
                Enter valid email address
              </div>

              <input
                type="password"
                placeholder="Password"
                id="password"
                // onChange={handleSignupDetails}
                // value={password}
              />
              <div id="pass_error" /*ref={passwordErrorRef}*/>
                Password must contain atleast 6 characters
              </div>

              <Button
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
            </Box>

            <Box sx={{ textAlign: "center" }}>
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
