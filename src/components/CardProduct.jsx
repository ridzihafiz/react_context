import React, { useContext } from "react";
import { ProductConsumer } from "../store/ProductProvider";

export default function CardProduct(props) {
  // global state
  const [total, setTotal] = useContext(ProductConsumer);

  const increment = () => {
    setTotal(total + 1);
  };

  const decrement = () => {
    setTotal(total - 1);
    if (total <= 0) {
      setTotal(0);
    }
  };

  return (
    <div
      style={{
        width: "35%",
        backgroundColor: "whitesmoke",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        boxShadow: "5px 4px 7px rgba(0,0,0,0.2) ",
      }}
    >
      <h1> {props.name} </h1>
      <h1> {props.price} </h1>
      <img
        src={props.img}
        alt={props.name}
        style={{
          width: "100%",
          height: 100,
          objectFit: "cover",
        }}
      />

      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          marginTop: 20,
          backgroundColor: "white",
        }}
      >
        <button onClick={decrement}>-</button>
        <h1> {total} </h1>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}
