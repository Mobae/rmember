import React from "react";
import { Button } from "react-bootstrap";
import intro from "../intro.jpg";
import { Link } from "react-router-dom";

const IntroSection = () => {
  const styles = {
    bulletPts: {
      marginTop: "1em",
      fontSize: "16.5px",
    },
    bulletContainer: {
      marginTop: "2em",
      marginBottom: "2em",
    },
  };
  return (
    <div>
      <div className="main-intro">
        <div className="content">
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "2em" }}
          >
            <div>
              <h1>Rmember</h1>
              <h3>Task Management Simplified</h3>
              <div style={styles.bulletContainer}>
                <p style={styles.bulletPts}>
                  <i className="chevron circle right icon large"></i>
                  Effortless task scheduling done with Rmember, so you can focus
                  on what matters the most
                </p>
                <p style={styles.bulletPts}>
                  <i className="chevron circle right icon large"></i>
                  Get notifications on your favorite platforms like WhatsApp,
                  Telegram and Discord
                </p>
                <p style={styles.bulletPts}>
                  <i className="chevron circle right icon large"></i>
                  Free of cost forever
                </p>
              </div>
              <button className="ui animated button blue" tabIndex="0">
                <Link to="/signup">
                  <div className="visible content">Get Started</div>
                  <div className="hidden content">It's Free</div>
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
                  marginLeft: "2em",
                  borderRadius: "2px",
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
