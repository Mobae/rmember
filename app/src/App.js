import React from "react";
import SideNav from "./components/SideNav";
import DemoModal from "./components/DemoModal";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <SideNav />
    
      <p style={{ marginLeft: "5em" }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus
        officiis velit repellat atque, alias a dolorum magnam cum pariatur? Ut
        quasi id placeat explicabo optio tempora esse deserunt, ipsum
        dignissimos.
      </p>

      <DemoModal style={{justifyContent: 'flex-end'}}/>
    </div>
  );
}

export default App;
