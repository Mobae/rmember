import React from "react";
import "./AllTodo.css";
import { Button } from "rsuite";

const TodoCard = (serial) => {
  return (
    <div className="card">
      <div className="card-header">
        {serial > 9 ? <h2>{serial}</h2> : <h2>0{serial}</h2>}
      </div>
      <div className="card-main-info">
        <p style={{ color: "#666", fontSize: "10px" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
          labore tempore eaque in reprehenderit nostrum id, eos cum quidem fugit
          suscipit atque impedit adipisci consequatur nobis, consectetur animi
          nulla corrupti!
        </p>
        <Button size="xs" className="read-more-button">
          Read More
        </Button>
      </div>
    </div>
  );
};

const AllTodo = () => {
  return (
    <div className="container">
      {TodoCard(1)} {TodoCard(2)} {TodoCard(3)}
      {TodoCard(4)}{" "}
    </div>
  );
};

export default AllTodo;
