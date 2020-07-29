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

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="sidenav" style={{ width: 250 }}>
      <Toggle onChange={handleToggle} checked={expanded} />
      <Sidenav
        expanded={expanded}
        defaultOpenKeys={["2"]}
        activeKey={activeKey}
        onSelect={updateActiveKey}
      >
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
