import React, { useContext } from "react";
import { MyContext } from "../MyContext";

const AsideBox = () => {
  const { playHistory } = useContext(MyContext);
  const fotStyle = {
    padding: "2px",
    fontSize: "12px",
    fontWeight: 600,
  };
  return (
    <div style={{ height: "100vh", padding: "10px 25px" }}>
      <div style={{ padding: "10px 0" }}>
        <div style={{ fontSize: "initial", fontWeight: "600" }}>
          <span>Listening history</span>
        </div>
        {playHistory.slice(0, 5).map((item, index) => (
          <div key={index} style={{ display: "flex", padding: "5px" }}>
            <div style={{ width: "50px", height: "50px" }}>
              <img style={{ width: "100%" }} src={item?.thumbnail} alt="" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                padding: "0 15px",
                fontWeight: "600",
              }}
            >
              <span style={{ textTransform: "capitalize" }}>{item?.mood}</span>
              <span>{item?.title}</span>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          borderTop: "1px solid #ccc",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "10px 0",
        }}
      >
        <span style={fotStyle}>Legal</span>
        <span style={fotStyle}>Privacy</span>
        <span style={fotStyle}>Cookie Policy</span>
        <span style={fotStyle}>Consent Manager</span>
        <span style={fotStyle}>Imprint</span>
        <span style={fotStyle}>Artist Resources</span>
        <span style={fotStyle}>Blog</span>
        <span style={fotStyle}>Charts</span>
        <span style={fotStyle}>Language: English (US)</span>
      </div>
    </div>
  );
};

export default AsideBox;
