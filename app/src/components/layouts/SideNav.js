import React, { Fragment, useEffect, useContext } from "react";
import "rsuite/dist/styles/rsuite-default.css";
import { Dropdown, Icon, Nav, Sidenav } from "rsuite";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth/AuthContext";
import { TodoContext } from "../../context/todos/TodoContext";

const SideNav = () => {
  const [activeKey, setActiveKey] = useState("1");
  const [expanded, setExpanded] = useState(true);
  const { isAuthenticated } = useContext(AuthContext);
  const { tags } = useContext(TodoContext);
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
          position: "fixed",
          top: 0,
          zIndex: 2,
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
      {isAuthenticated ? (
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
            style={{
              height: "1000px",
              position: "absolute",
              zIndex: "1",
              maxWidth: "200px",
            }}
          >
            <div style={{ position: "sticky", top: "50px" }}>
              <Sidenav.Body style={{ backgroundColor: "#F7F7FA" }}>
                <Nav>
                  {/* <Link to="/todos"> */}
                  <Nav.Item eventKey="2" icon={<Icon icon="list" />}>
                    Todos
                  </Nav.Item>
                  {/* </Link> */}
                  <Dropdown
                    eventKey="3"
                    title="Tags"
                    icon={<Icon icon="tags" />}
                  >
                    {tags.map((tag, index) => (
                      <Dropdown.Item eventKey={"3-" + (index + 1).toString()}>
                        {tag.name}
                      </Dropdown.Item>
                    ))}
                  </Dropdown>
                  {/* <Link to="/completed"> */}
                  <Nav.Item eventKey="4" icon={<Icon icon="check" />}>
                    Completed
                  </Nav.Item>
                  {/* </Link> */}
                  {/* <Link to="/trash"> */}
                  <Nav.Item eventKey="5" icon={<Icon icon="trash" />}>
                    Trash
                  </Nav.Item>
                  {/* </Link> */}
                </Nav>
              </Sidenav.Body>
            </div>
          </Sidenav>
        </div>
      ) : null}
    </Fragment>
  );
};

export default SideNav;
