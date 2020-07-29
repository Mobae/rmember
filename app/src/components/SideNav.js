import React from "react";
import "rsuite/dist/styles/rsuite-default.css";
import { Dropdown, Icon, Nav, Sidenav, Toggle } from "rsuite";
import { useState } from "react";

const SideNav = () => {
  const [activeKey, setActiveKey] = useState("1");
  const [expanded, setExpanded] = useState(true);

  const updateActiveKey = (eventKey) => {
    console.log("hello");
    setActiveKey(eventKey);
  };

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className="sidenav"
      style={{ width: 250, height: "1000px", backgroundColor: "#F7F7FA" }}
    >
      <Sidenav
        expanded={expanded}
        defaultOpenKeys={["2"]}
        activeKey={activeKey}
        onSelect={updateActiveKey}
      >
        <Sidenav.Body>
          <Nav>
            <Nav.Item
              title="Rmember"
              eventKey="1"
              icon={<Icon icon="bars" style={{ color: "#000" }} />}
              onClick={handleClick}
              style={{ backgroundColor: "skyblue" }}
            >
              <strong style={{ color: "#000" }}>Rmember</strong>
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<Icon icon="bars" />}>
              Todos
            </Nav.Item>
            <Dropdown eventKey="3" title="Tags" icon={<Icon icon="tags" />}>
              <Dropdown.Item eventKey="3-1">tag1</Dropdown.Item>
              <Dropdown.Item eventKey="3-2">tag2</Dropdown.Item>
            </Dropdown>
            <Nav.Item eventKey="4" icon={<Icon icon="check" />}>
              Completed
            </Nav.Item>
            <Nav.Item eventKey="5" icon={<Icon icon="trash" />}>
              Trash
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default SideNav;
