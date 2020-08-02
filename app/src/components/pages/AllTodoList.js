import React, { useState } from 'react';
import {
  ButtonToolbar,
  Button,
  Modal,
  Checkbox,
  Nav,
  Drawer,
  Dropdown,
  Icon,
  Panel,
} from 'rsuite';

const AllTodoList = () => {
  const [show, setShow] = useState(false);

  const close = () => {
    setShow(false);
  };

  const open = () => {
    setShow(true);
  };

  const toggleDrawer = () => {
    setShow(true);
  };

  return (
    <div
      className='AllTodo'
       style={{ justifyContent: 'center', margin: "0 auto" }} 
    >
      <div className = "pending">
      <Panel style = {{marginTop: "60px", justifyContent: "center", width: "80%", marginLeft: '200px', margin: "auto" }} header = "Pending" defaultExpanded  collapsible shaded >
      <Nav className='list'>
        <div className='one' style={{ display: 'flex' }}>
          <Checkbox></Checkbox>
          <p onClick={open} style={{ margin: 'auto 0.2em' }}>
            First Todo
          </p>
        </div>
        
        <div className='two' style={{ display: 'flex' }}>
          <Checkbox></Checkbox>
          <p onClick={open} style={{ margin: 'auto 0.2em' }}>
            Second Todo
          </p>
        </div>
      </Nav>
      </Panel>
      <Drawer
        show={show}
        onHide={close}
        // backdrop={backdrop}
        style={{ marginTop: '50px', width: '40%' }}
      >
        <Drawer.Header>
          <Drawer.Title>Description:</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Modal.Header>
            <Modal.Title>Description..</Modal.Title>
          </Modal.Header>
        </Drawer.Body>
        <Drawer.Footer>
          <Button onClick={close} appearance='primary'>
            Confirm
          </Button>
          <Button onClick={close} appearance='subtle'>
            Cancel
          </Button>
        </Drawer.Footer>
      </Drawer>
      </div>

      {/* line */}
      <hr style = {{marginRight: "250px", justifyContent: "center", width: "80%", marginLeft: "200px"}}></hr>
      {/* middle line end */}
      
      <div className = "completed">
      <Panel style = {{marginTop: "60px", justifyContent: "center", width: "80%", marginLeft: '200px',  margin: "auto"}} header = "Completed" defaultExpanded  collapsible >
      <Nav className='list'>
        <div className='one' style={{ display: 'flex' }}>
          <Checkbox defaultChecked></Checkbox>
          <p onClick={open} style={{ margin: 'auto 0.2em' }}>
            Completed 1
          </p>
        </div>
        
        <div className='two' style={{ display: 'flex' }}>
          <Checkbox defaultChecked></Checkbox>
          <p onClick={open} style={{ margin: 'auto 0.2em' }}>
            Completed 2
          </p>
        </div>
      </Nav>
      </Panel>
      <Drawer
        show={show}
        onHide={close}
        // backdrop={backdrop}
        style={{ marginTop: '50px', width: '40%' }}
      >
        <Drawer.Header>
          <Drawer.Title>Description:</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Modal.Header>
            <Modal.Title>Description..</Modal.Title>
          </Modal.Header>
        </Drawer.Body>
        <Drawer.Footer>
          <Button onClick={close} appearance='primary'>
            Confirm
          </Button>
          <Button onClick={close} appearance='subtle'>
            Cancel
          </Button>
        </Drawer.Footer>
      </Drawer>
      </div>
    </div>
  );
};
export default AllTodoList;
