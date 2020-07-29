import React from "react";
import "rsuite/dist/styles/rsuite-default.css";
import { Dropdown, Icon, Nav, Sidenav } from "rsuite";

const SideNav = () => {
  return (
    <div className="sidenav" style={{ width: 250 }}>
      <Sidenav defaultOpenKeys={["3", "4"]} activeKey="1">
        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
              Todos
            </Nav.Item>
            <Dropdown eventKey="3" title="Tags" icon={<Icon icon="magic" />}>
              <Dropdown.Item eventKey="3-1">tag1</Dropdown.Item>
              <Dropdown.Item eventKey="3-2">tag2</Dropdown.Item>
            </Dropdown>
            <Nav.Item eventKey="4" icon={<Icon icon="dashboard" />}>
              Completed
            </Nav.Item>
            <Nav.Item eventKey="5" icon={<Icon icon="dashboard" />}>
              Trash
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default SideNav;
