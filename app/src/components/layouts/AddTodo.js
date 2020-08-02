import React, { useContext, useEffect, useState } from "react";
import {
  ButtonToolbar,
  Modal,
  Button,
  Icon,
  FormGroup,
  HelpBlock,
  ControlLabel,
  FormControl,
  Form,
  RadioGroup,
  Radio,
  TagPicker,
  DatePicker,
  Toggle,
} from "rsuite";

const styles = {
  radioGroupLabel: {
    padding: "8px 2px 8px 10px",
    display: "inline-block",
    verticalAlign: "middle",
  },
};

const AddTodo = () => {
  const [show, setShow] = useState(false);
  const [todo, setTodo] = useState("");
  const [desc, setDesc] = useState("");
  const [priority, setPriority] = useState("");
  const [completed, setCompleted] = useState(false);
  const [date, setDate] = useState(new Date());
  const [incomingTags, setIncomingTags] = useState(null);

  const handleChange = (value) => {
    setTodo(value.todo);
    setDesc(value.desc);
  };

  const handleAdd = (value) => {
    // Send the data to server
    setShow(false);
  };

  return (
    <div
      className="modal-container"
      style={{ position: "fixed", top: 600, right: 100 }}
    >
      <Modal
        overflow={true}
        show={show}
        onHide={() => setShow(false)}
        size="xs"
        style={{ width: "100%" }}
      >
        <Modal.Header>
          <Modal.Title>Add new todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form fluid onChange={handleChange}>
            {/* priority */}
            <FormGroup>
              <RadioGroup
                onChange={(value) => setPriority(value)}
                name="priority"
                inline
                appearance="picker"
              >
                <span style={styles.radioGroupLabel}>Status: </span>
                <Radio value="1">Panic Mode</Radio>
                <Radio value="2">Kinda Imp</Radio>
                <Radio value="3">Meh</Radio>
              </RadioGroup>
            </FormGroup>
            {/* main todo */}
            <FormGroup>
              {/* <ControlLabel>Todo</ControlLabel> */}
              <FormControl placeholder="Enter todo..." name="todo" />
            </FormGroup>
            {/* description */}
            <FormGroup>
              <FormControl
                rows={5}
                name="desc"
                componentClass="textarea"
                placeholder="Description..."
              />
            </FormGroup>
            {/* due date */}
            <FormGroup>
              <DatePicker
                onChange={(value) => setDate(value)}
                oneTap
                style={{ width: 500 }}
                // defaultValue={new Date()}
                placeholder="due on"
                placement="auto"
              />
            </FormGroup>
            {/* tags */}
            <FormGroup>
              {/* <ControlLabel>Tags</ControlLabel> */}
              <TagPicker
                onChange={(value) => setIncomingTags(value)}
                data={tags}
                style={{ width: 500 }}
                placeholder="Tags"
              />
            </FormGroup>
            {/* completed */}
            <FormGroup>
              <Toggle
                onChange={(checked) => setCompleted(checked)}
                size="lg"
                checkedChildren="completed"
                unCheckedChildren="   due   "
              />
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleAdd} appearance="primary">
            Add
          </Button>
          <Button onClick={() => setShow(false)} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <div
        onClick={() => setShow(true)}
        style={{
          backgroundColor: "teal",
          padding: "10px",
          borderRadius: "50%",
          boxShadow: "3px 3px #888888",
          position: "absolute",
          zIndex: "1",
        }}
      >
        <Icon icon="plus" size="3x" />
      </div>
    </div>
  );
};

export default AddTodo;

const tags = [
  {
    label: "python",
    value: "python",
  },
  {
    label: "javascript",
    value: "javascript",
  },
  {
    label: "movies",
    value: "movies",
  },
  {
    label: "anime",
    value: "anime",
  },
];
