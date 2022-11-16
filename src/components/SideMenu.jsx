import React from "react";

export default function SideMenu(props) {
  return (
    <div
      style={{
        width: 250,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
      }}
    >
      Total Belanja: {props.total}
    </div>
  );
}
