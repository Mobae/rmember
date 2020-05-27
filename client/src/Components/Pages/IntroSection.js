import React from "react";
import intro from "../intro.jpg";
import { Link } from "react-router-dom";

const IntroSection = () => {
  const fontStyle = { fontSize: "20px", letterSpacing: "2px" };

  return (
    <div>
      <div className="main-intro">
        <div className="content">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <h1>Rmember</h1>
              <h2 style={{ fontSize: "3rem", letterSpacing: "2px" }}>
                Task Management <br /> Simplified
              </h2>
              <p style={{ fontSize: "1rem", letterSpacing: "1px" }}>
                Then some Deatils for our app. Rmember's boards, lists, and
                cards enable you to organize and prioritize your projects in a
                fun, flexible, and rewarding way. . Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Voluptates dolorem perferendis
                quaerat alias facere nesciunt laudantium vero omnis tempora,
                itaque veritatis temporibus iure nam. Reprehenderit est eius
                fuga totam id!
              </p>
              <button className="ui animated button blue" tabIndex="0">
                <Link to="/signup">
                  <div className="visible content" style={fontStyle}>
                    Get Started
                  </div>
                  <div className="hidden content" style={fontStyle}>
                    It's Free
                  </div>
                </Link>
              </button>
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
