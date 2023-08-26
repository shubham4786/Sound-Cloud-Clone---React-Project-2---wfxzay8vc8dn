import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MainBox from "./MainBox";
import AsideBox from "./AsideBox";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "unset",
  margin: "1px",
}));

const MainContainer = () => {
  return (
    <Box sx={{ flexGrow: 1, margin: "0 24px" }}>
      <Grid container>
        <Grid item xs={8}>
          <Item>
            <MainBox />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item sx={{ position: "fixed", width: "30%" }}>
            <AsideBox />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContainer;
