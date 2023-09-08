import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Profile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userInfo")));
  }, []);
  //   console.log(user);
  return (
    <Container maxWidth="lg" sx={{ paddingTop: "45px", marginBottom: "50px" }}>
      <Box sx={{ margin: "0 24px" }}>
        <Box sx={{ background: "white" }}>
          <Box sx={{}}>
            <Box sx={{}}>
              <h1 style={{ textAlign: "center" }}>Profile</h1>
              <Box>
                <h5>Name: {user.userName}</h5>
                <h5>Email: {user.userEmail}</h5>
              </Box>
            </Box>
            <Box>
              <Box>
                <h2>Change your password</h2>
                <p>
                  Protect your account with a unique password at least 6
                  characters long.
                </p>
                <Box>
                  <div className="inputContainer">
                    <input
                      type="text"
                      id="oldPassword"
                      placeholder="Current Password"
                      className="inputAccount"
                      // value={oldPassword}
                      // onChange={updatePasswordHandler}
                    />
                    <p
                      className="accountpasswordError" /*</div>ref={oldPasswordRef}*/
                    >
                      Password didn't match.
                    </p>
                    <p className="forgotPassword">Forgot password?</p>
                  </div>
                  <div className="inputContainer">
                    <input
                      type="password"
                      id="newPassword"
                      placeholder="New password (6-60 characters)"
                      className="inputAccount"
                      // value={newPassword}
                      // onChange={updatePasswordHandler}
                    />
                    <br />
                    <p
                      className="accountpasswordError" /*ref={newPasswordRef}*/
                    >
                      Password should be between 6 and 60 characters long.
                    </p>
                  </div>
                  <div className="inputContainer">
                    <input
                      type="password"
                      id="rePassword"
                      placeholder="Re-enter new password"
                      className="inputAccount"
                      // value={rePassword}
                      // onChange={updatePasswordHandler}
                    />
                    <br />
                    <p className="accountpasswordError" /*ref={rePasswordRef}*/>
                      Must match your new password.
                    </p>
                  </div>
                </Box>
              </Box>
              <Box>
                <label className="checkboxLabel">
                  <input
                    type="checkbox"
                    className="inputCheckboxAccount"
                    //   checked={signOutAllDevices}
                    //   onChange={checkboxChangeHandler}
                  />
                  Sign out of all devices
                </label>
                <div className="accountBtns">
                  <button
                    /*onClick={saveInputHandler}*/ className="saveAccountBtn"
                  >
                    Save
                  </button>
                  <button
                    //   onClick={() => navigate(-1)}
                    className="cancelAccountBtn"
                  >
                    Cancel
                  </button>
                </div>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
