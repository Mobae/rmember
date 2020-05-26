import React from "react";
import { Button } from "react-bootstrap";
import intro from "../intro.jpg";
import { Link } from "react-router-dom";

const IntroSection = () => {
  return (
    <div>
      <div className="main-intro">
        <div className="content">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <h1>Rmember</h1>
              <h4>Task Management Simplified</h4>
              <p>
                Then some Deatils for our app. Rmember's boards, lists, and
                cards enable you to organize and prioritize your projects in a
                fun, flexible, and rewarding way. . Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Voluptates dolorem perferendis
                quaerat alias facere nesciunt laudantium vero omnis tempora,
                itaque veritatis temporibus iure nam. Reprehenderit est eius
                fuga totam id!
              </p>
            </div>
            <div>
              <img
                src={intro}
                alt=""
                style={{
                  display: "block",
                  maxWidth: "500px",
                  width: "auto",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
