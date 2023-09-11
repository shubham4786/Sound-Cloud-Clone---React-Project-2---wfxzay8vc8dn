import { useContext } from "react";
import Container from "@mui/material/Container";
import MainContainer from "../components/MainContainer";
import { MyContext } from "../MyContext";

const Home = () => {
  const { searchedHideRef } = useContext(MyContext);
  return (
    <Container maxWidth="12px" ref={searchedHideRef} sx={{ paddingTop: 5 }}>
      <MainContainer />
    </Container>
  );
};

export default Home;
