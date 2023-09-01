import Layout from "./containers/Layout";
import SignUp from "./containers/SignUp";
import Home from "./containers/Home";
import PlayList from "./containers/PlayList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyProvider from "./MyContext";

function App() {
  return (
    <div style={{ background: "#f2f2f2", alignItems: "center" }}>
      <BrowserRouter>
        <MyProvider>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route
              path="/home"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/playlist"
              element={
                <Layout>
                  <PlayList />
                </Layout>
              }
            />
          </Routes>
        </MyProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
