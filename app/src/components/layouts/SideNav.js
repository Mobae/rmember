import React, { Fragment } from "react";
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
    <Fragment>
      <div
        style={{
          width: "100%",
          backgroundColor: "skyblue",
          display: "flex",
        }}
      >
        <a style={{ margin: "auto 0", marginLeft: "1.2em" }} href="#">
          <Icon
            icon="bars"
            size="2x"
            style={{ color: "#000" }}
            onClick={handleClick}
          />
        </a>
        <strong
          style={{ fontSize: "35.5px", color: "black", margin: "0 auto" }}
        >
          Rmember
        </strong>
      </div>
      <div
        className="sidenav"
        style={{
          width: 250,
          position: "absolute",
          marginTop: "50px",
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
    </Fragment>
  );
};

export default SideNav;
