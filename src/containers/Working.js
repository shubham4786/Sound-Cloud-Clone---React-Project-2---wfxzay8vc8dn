import React from "react";
import workImgae from "../assets/working.png";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Working = () => {
  return (
    <Container maxWidth="xl" sx={{ paddingTop: "45px", marginBottom: "50px" }}>
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
