import React from "react";
import "rsuite/dist/styles/rsuite-default.css";
import { Dropdown, Icon, Nav, Sidenav } from "rsuite";

const SideNav = () => {
  return (
    <div className="sidenav" style={{ width: 250 }}>
      <Sidenav defaultOpenKeys={["2"]} activeKey="1">
        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey="1" icon={<Icon icon="th-list" />}>
              Todos
            </Nav.Item>
            <Dropdown eventKey="2" title="Tags" icon={<Icon icon="tags" />}>
              <Dropdown.Item eventKey="2-1">tag1</Dropdown.Item>
              <Dropdown.Item eventKey="2-2">tag2</Dropdown.Item>
            </Dropdown>
            <Nav.Item eventKey="3" icon={<Icon icon="check" />}>
              Completed
            </Nav.Item>
            <Nav.Item eventKey="4" icon={<Icon icon="trash" />}>
              Trash
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default SideNav;
