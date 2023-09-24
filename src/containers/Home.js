import { useContext, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import MainContainer from "../components/MainContainer";
import { MyContext } from "../MyContext";

const Home = () => {
  const { searchedHideRef, isSingIn, setIsSingnIn } = useContext(MyContext);

  useEffect(() => {
    setTimeout(() => {
      setIsSingnIn(false);
    }, 1000);
  }, []);
  return (
    <Container maxWidth="12px" ref={searchedHideRef} sx={{ paddingTop: 5 }}>
      {isSingIn && (
        <div className="alert">
          <h4
            style={{
              background: "#1fdd1e",
              padding: "8px",
              color: "#342f24",
              textAlign: "center",
            }}
          >
            Signin Successfull !
          </h4>
        </div>
      )}
      <MainContainer />
    </Container>
  );
};

export default Home;
