import React from "react";
import { Navbar, Nav, Icon, Dropdown } from "rsuite";

const TopNav = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "skyblue",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <strong style={{ fontSize: "35.5px", color: "black" }}>Rmember</strong>
    </div>
  );
};
export default TopNav;

//   <Navbar>
//     {/* <Navbar.Header>RSUITE</Navbar.Header> */}
//     <div style={{ backgroundColor: "skyblue" }}></div>
//     <Navbar.Body>
//       <strong>Rmember</strong>
//     </Navbar.Body>
//   </Navbar>
