import React, { useState, useEffect, useContext, useReducer } from "react";
import "./AllTodo.css";
import { TodoContext } from "../../context/todos/TodoContext";
import { Button, Modal } from "rsuite";
// import { TodoContext } from "../../context/todos/TodoContext";

const TodoCard = (props) => {
  const backdrop = true;
  const [show, setShow] = useState(false);
  const { serial, priority, desc, todo } = props;

  const close = () => {
    setShow(false);
  };

  const open = () => {
    setShow(true);
  };

  return (
    <div className="card">
      <div className="circle">
        <span>{todo}</span>
        {serial > 9 ? <h2>{serial}</h2> : <h2>0{serial}</h2>}
      </div>
      <div className="content">
        <p>{desc}</p>
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
  const { getTodos, getTags, todos } = useContext(TodoContext);
  useEffect(() => {
    getTodos();
    getTags();
  }, []);
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      {todos.map((todo) => (
        <TodoCard serial="1" priority="Imp" desc={todo.desc} todo={todo.todo} />
      ))}
      {/* {TodoCard(1, "Important")} */}
    </div>
  );
};

export default AllTodo;
