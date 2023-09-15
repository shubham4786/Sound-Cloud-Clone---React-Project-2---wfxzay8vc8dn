import React, { useContext } from "react";
import workImgae from "../assets/working.png";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { MyContext } from "../MyContext";

const Working = () => {
  const { searchedHideRef } = useContext(MyContext);
  return (
    <Container maxWidth="xl" ref={searchedHideRef} sx={{ paddingTop: "45px" }}>
      <Box sx={{ margin: "0 24px" }}>
        <Box
          sx={{
            background: "white",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img style={{ width: "100vh" }} src={workImgae} alt="" />
        </Box>
      </Box>
    </Container>
  );
};

export default Working;
