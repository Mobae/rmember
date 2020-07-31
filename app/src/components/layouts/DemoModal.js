import React, { useContext, useEffect, useState } from "react";
import { Container, Button as FButton, Link } from 'react-floating-action-button'
import {
    ButtonToolbar,
    Modal,
    Button,
    Icon
} from 'rsuite';

const btnStyle = {

}


const DemoModal = () => {
    const [ show, setShow ] = useState(false);
    const [ overflow, setOverflow ] = useState(true);
  
    return (
      <div className="modal-container" style={{position: 'fixed', top: 650, right: 25}}>

        <div onClick={() => setShow(true)} style={{backgroundColor: "teal", padding: '10px', borderRadius: '50%', boxShadow: '3px 3px #888888'}} >
          <Icon icon="plus" size="3x" />
        </div>
        
  
        <Modal overflow={overflow} show={show} onHide={() => setShow(false)}>
          <Modal.Header>
            <Modal.Title>Take the jerk out ... </Modal.Title> <p style={{display: 'flex'}}> Aug 4 2020</p>
          </Modal.Header>
          <Modal.Body>
            <p>Hello</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setShow(false)} appearance="primary">
              Save
            </Button>
            <Button onClick={() => setShow(false)} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
}

export default DemoModal;