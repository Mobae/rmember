import React from "react";
import "rsuite/dist/styles/rsuite-default.css";
import { Dropdown, Icon, Nav, Sidenav } from "rsuite";
import { useState } from "react";
import { Link } from "react-router-dom";

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
      style={{
        width: 250,
        // height: "1000px",
        position: "absolute",
        // backgroundColor: "#F7F7Fa",
      }}
    >
      <Sidenav
        expanded={expanded}
        defaultOpenKeys={["2"]}
        activeKey={activeKey}
        onSelect={updateActiveKey}
        style={{ height: "1000px" }}
      >
        <div style={{ position: "sticky", top: 0 }}>
          <Sidenav.Body style={{ backgroundColor: "#F7F7FA" }}>
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

              <Link to="/todos">
                <Nav.Item eventKey="2" icon={<Icon icon="list" />}>
                  Todos
                </Nav.Item>
              </Link>
              <Dropdown eventKey="3" title="Tags" icon={<Icon icon="tags" />}>
                <Dropdown.Item eventKey="3-1">tag1</Dropdown.Item>
                <Dropdown.Item eventKey="3-2">tag2</Dropdown.Item>
              </Dropdown>
              <Link to="/completed">
                <Nav.Item eventKey="4" icon={<Icon icon="check" />}>
                  Completed
                </Nav.Item>
              </Link>
              <Link to="/trash">
                <Nav.Item eventKey="5" icon={<Icon icon="trash" />}>
                  Trash
                </Nav.Item>
              </Link>
            </Nav>
          </Sidenav.Body>
        </div>
      </Sidenav>
    </div>
  );
};

export default SideNav;
