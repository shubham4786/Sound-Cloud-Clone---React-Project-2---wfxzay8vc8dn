import Layout from "./containers/Layout";
import SignUp from "./containers/SignUp";
import Home from "./containers/Home";
import PlayList from "./containers/PlayList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyProvider from "./MyContext";
import Feed from "./containers/Feed";
import Library from "./containers/Library";
import Working from "./containers/Working";
import Profile from "./containers/Profile";

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
            <Route
              path="/feed"
              element={
                <Layout>
                  <Feed />
                </Layout>
              }
            />
            <Route
              path="/library"
              element={
                <Layout>
                  <Library />
                </Layout>
              }
            />
            <Route
              path="/working"
              element={
                <Layout>
                  <Working />
                </Layout>
              }
            />
            <Route
              path="/profile"
              element={
                <Layout>
                  <Profile />
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
