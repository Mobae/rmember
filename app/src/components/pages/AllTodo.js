import React, { useState } from "react";
import "./AllTodo.css";
import { Button, Modal } from "rsuite";

const TodoCard = (serial, priority) => {
  const backdrop = true;
  const [show, setShow] = useState(false);

  const close = () => {
    setShow(false);
  };

  const open = () => {
    setShow(true);
  };

  return (
    <div className="card">
      <div className="circle">
        <span>{priority}</span>
        {serial > 9 ? <h2>{serial}</h2> : <h2>0{serial}</h2>}
      </div>
      <div className="content">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
          labore tempore eaque in reprehenderit nostrum id, eos cum quidem fugit
          suscipit atque impedit adipisci consequatur nobis, consectetur animi
          nulla corrupti!
        </p>
        <Button size="xs" className="read-more-button" onClick={open}>
          Read More
        </Button>
        <Modal
          backdrop={backdrop}
          show={show}
          onHide={close}
          style={{ width: "100%", top: 50 }}
        >
          <Modal.Header>
            <Modal.Title>{priority}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1 style={{ fontSize: "10px", lineHeight: "20px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              laboriosam praesentium hic atque vero velit accusantium aliquid ex
              iusto aut, maiores illo modi dolores quasi et! Repellat nobis
              corrupti odio!
            </h1>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close} appearance="primary">
              Ok
            </Button>
            <Button onClick={close} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

const AllTodo = () => {
  return (
    <div className="container">
      {TodoCard(1, "Important")}
      {TodoCard(2, "Kinda_Imp")}
      {TodoCard(3, "Just Do It")}
      {TodoCard(4, "Meh")}
      {TodoCard(5, "Meh")}
      {TodoCard(6, "Meh")}
    </div>
  );
};

export default AllTodo;
