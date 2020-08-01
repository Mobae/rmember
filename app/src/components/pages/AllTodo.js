import React from "react";
import { Button } from "rsuite";

const TodoCard = (serial) => {
  return (
    <div
      style={{
        position: "relative",
        width: "250px",
        height: "360px",
        background: "#fff",
        margin: "0.5em",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          background: "#000",
          clipPath: "circle(120px at center 0)",
          textAlign: "center",
        }}
      >
        {serial > 9 ? (
          <h2 style={{ color: "#fff", fontSize: "3.5em", padding: "30px 0" }}>
            {serial}
          </h2>
        ) : (
          <h2 style={{ color: "#fff", fontSize: "3.5em", padding: "30px 0" }}>
            0{serial}
          </h2>
        )}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#666", fontSize: "12px" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
          labore tempore eaque in reprehenderit nostrum id, eos cum quidem fugit
          suscipit atque impedit adipisci consequatur nobis, consectetur animi
          nulla corrupti!
        </p>
        <Button
          style={{
            backgroundColor: "#000",
            color: "white",
            marginTop: "20px",
          }}
          size="sm"
        >
          Read More
        </Button>
      </div>
    </div>
  );
};

const AllTodo = () => {
  return (
    <div
      style={{
        marginLeft: "30px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        // backgroundAttachment: "fixed",
      }}
    >
      {TodoCard(1)} {TodoCard(2)} {TodoCard(3)}{" "}
    </div>
  );
};

export default AllTodo;
