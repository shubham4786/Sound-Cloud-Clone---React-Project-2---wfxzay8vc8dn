import React, { useState, useEffect, useContext, useRef } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { MyContext } from "../MyContext";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Profile = () => {
  const { searchedHideRef } = useContext(MyContext);
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userInfo")));
  }, []);

  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [inputValue, setInputValue] = useState({
    oldPassword: "",
    newPassword: "",
    rePassword: "",
  });

  const [signOutAllDevices, setSignOutAllDevices] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);
  const { oldPassword, newPassword, rePassword } = inputValue;

  const oldPasswordRef = useRef(null);
  const newPasswordRef = useRef(null);
  const rePasswordRef = useRef(null);
  const storedToken = localStorage.getItem("authToken");

  const updatePasswordHandler = (event) => {
    let field = event.target.id;
    let value = event.target.value;

    setInputValue({
      ...inputValue,
      [field]: value,
    });

    if (field === "oldPassword") {
      oldPasswordRef.current.style.display = "none";
    } else if (field === "newPassword") {
      newPasswordRef.current.style.display = "none";
    } else if (field === "rePassword") {
      rePasswordRef.current.style.display = "none";
    }
  };

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");

    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  const checkboxChangeHandler = () => {
    setSignOutAllDevices(!signOutAllDevices);
  };

  const saveInputHandler = async () => {
    // Comparing old password with the stored hash userPassword
    const isPasswordValid = await bcrypt.compare(
      oldPassword,
      userInfo?.userPassword
    );

    if (!isPasswordValid) {
      oldPasswordRef.current.style.display = "block";
    }
    if (
      newPassword.length < 6 ||
      newPassword.length > 60 ||
      newPassword === ""
    ) {
      newPasswordRef.current.style.display = "block";
    }
    if (newPassword !== rePassword || rePassword === "") {
      rePasswordRef.current.style.display = "block";
    }

    if (
      newPassword === oldPassword &&
      oldPassword !== "" &&
      newPassword !== ""
    ) {
      toast.info("Old password & new password should be different!.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (oldPassword === "" || newPassword === "" || rePassword === "") {
      toast.info("Each field is required.", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    if (
      isPasswordValid &&
      newPassword === rePassword &&
      (rePassword !== "" || newPassword !== "")
    ) {
      try {
        const response = await axios.patch(
          "https://academics.newtonschool.co/api/v1/user/updateMyPassword",
          {
            name: userInfo?.userName,
            email: userInfo?.userEmail,
            passwordCurrent: oldPassword,
            password: newPassword,
            appType: "music",
          },
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
              projectId: "wfxzay8vc8dn",
            },
          }
        );
        console.log(response);

        if (signOutAllDevices) {
          localStorage.removeItem("authToken");
          localStorage.removeItem("userInfo");
          setIsUpdate(true);
        }

        localStorage.setItem(
          "userInfo",
          JSON.stringify({
            ...userInfo,
            userPassword: newPassword,
          })
        );

        toast.success("Update password Successfull.", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setInputValue({
          oldPassword: "",
          newPassword: "",
          rePassword: "",
        });
        setIsUpdate(true);
      } catch (error) {
        console.error("Update password error:", error);
        toast.error("Failed to update password.", {
          position: "top-right",
          autoClose: 1500,
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
    let timeoutId;
    if (isUpdate) {
      timeoutId = setTimeout(() => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userInfo");
        navigate("/signin");
      }, 2000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isUpdate]);

  return (
    <Container
      maxWidth="lg"
      ref={searchedHideRef}
      sx={{ paddingTop: "45px", marginBottom: "50px" }}
    >
      <Box sx={{ margin: "0 24px" }}>
        <Box /*sx={{ background: "white" }}*/>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "25rem",
              }}
              className="updatePasswordPage"
            >
              <ToastContainer />
              <h1 style={{ textAlign: "center" }}>Profile</h1>
              <h4 style={{ textTransform: "capitalize", margin: " 5px 10px" }}>
                Name:- {user.userName}
              </h4>
              <h4 style={{ margin: " 5px 10px" }}>Email:- {user.userEmail}</h4>
              <h2 className="changeHeading">Change your password</h2>
              <p className="changeText">
                Protect your account with a unique password
              </p>
              <div className="updatePasswordInput">
                <div className="inputContainer">
                  <input
                    type="text"
                    id="oldPassword"
                    placeholder="Current Password"
                    className="inputAccount"
                    value={oldPassword}
                    onChange={updatePasswordHandler}
                  />
                  <p className="accountpasswordError" ref={oldPasswordRef}>
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
                    value={newPassword}
                    onChange={updatePasswordHandler}
                  />
                  <br />
                  <p className="accountpasswordError" ref={newPasswordRef}>
                    Password should be between 6 and 60 characters long.
                  </p>
                </div>
                <div className="inputContainer">
                  <input
                    type="password"
                    id="rePassword"
                    placeholder="Re-enter new password"
                    className="inputAccount"
                    value={rePassword}
                    onChange={updatePasswordHandler}
                  />
                  <br />
                  <p className="accountpasswordError" ref={rePasswordRef}>
                    Must match your new password.
                  </p>
                </div>
              </div>
              <label className="checkboxLabel">
                <input
                  type="checkbox"
                  className="inputCheckboxAccount"
                  checked={signOutAllDevices}
                  onChange={checkboxChangeHandler}
                />
                Sign out of all devices
              </label>
              <div className="accountBtns">
                <button onClick={saveInputHandler} className="saveAccountBtn">
                  Save
                </button>
                <button
                  /*onClick={() => navigate(-1)}*/ className="cancelAccountBtn"
                >
                  Cancel
                </button>
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
