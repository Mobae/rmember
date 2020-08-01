import React from "react";
import "./AllTodo.css";
import { Button } from "rsuite";

// const Priority = (priority) => {
//   let color;
//   switch (priority) {
//     case Panic_Mode:
//       color = red;
//       break;
//     case Kinda_Imp:
//       color = orange;
//     case Meh:
//       color = green;
//     default:
//       break;
//   }
// };

const TodoCard = (serial, priority) => {
  return (
    <div className="card">
      <div className="circle">
        <span>{priority}</span>
        {serial > 9 ? <h2>{serial}</h2> : <h2>0{serial}</h2>}
      </div>
      <div className="content">
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
      {TodoCard(1, "Important")} {TodoCard(2, "Kinda_Imp")}{" "}
      {TodoCard(3, "Just Do It")}
      {TodoCard(4, "Meh")}{" "}
    </div>
  );
};

export default AllTodo;
