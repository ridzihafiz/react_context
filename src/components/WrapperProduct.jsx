import React from "react";
import CardProduct from "./CardProduct";

export default function WrapperProduct() {
  return (
    <div
      style={{
        flex: 1,
        minHeight: 900,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        padding: 20,
      }}
    >
      <h1 style={{ marginBottom: 10 }}>Product</h1>
      <hr />

      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <CardProduct
          name={"Shoes"}
          price={"Rp. 35.000"}
          img={
            "https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=300"
          }
        />
      </div>
    </div>
  );
}
