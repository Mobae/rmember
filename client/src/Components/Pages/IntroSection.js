import React from "react";
import { Button } from "react-bootstrap";
import intro from "../intro.jpg";
import feature1 from "../Feature1.png";
import feature2 from "../Feature2.png";
import feature3 from "../Feature3.png";
import feature4 from "../Feature4.png";
import { Link } from "react-router-dom";

const IntroSection = () => {
  const styles = {
    bulletPts: {
      marginTop: "1.5em",
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

      <div
        class="ui divider"
        wfd-id="65"
        style={{ marginTop: "3em", marginBottom: "3em" }}
      ></div>

      <div className="feature1" style={{ backgroundColor: "#fafafa" }}>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "2em" }}
        >
          <div>
            <img
              src={feature1}
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
          <div style={{ marginLeft: "2em" }}>
            <h1>Feature 1</h1>
            <p>
              Feature Description. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sunt inventore est natus sit, reiciendis earum
              quaerat culpa aliquam! Rerum quasi tempore aliquid, eum iusto
              ipsam est accusamus sequi quae odio.
            </p>
          </div>
        </div>
      </div>

      <div
        class="ui divider"
        wfd-id="65"
        style={{ marginTop: "3em", marginBottom: "3em" }}
      ></div>

      <div className="feature2">
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "2em" }}
        >
          <div>
            <h1>Feature 2</h1>
            <p>
              Feature Description. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sunt inventore est natus sit, reiciendis earum
              quaerat culpa aliquam! Rerum quasi tempore aliquid, eum iusto
              ipsam est accusamus sequi quae odio.
            </p>
          </div>
          <div>
            <img
              src={feature2}
              alt=""
              style={{
                display: "block",
                maxWidth: "500px",
                width: "30em",
                height: "40em",
                marginLeft: "2em",
                borderRadius: "2px",
              }}
            />
          </div>
        </div>
      </div>

      <div
        class="ui divider"
        wfd-id="65"
        style={{ marginTop: "3em", marginBottom: "3em" }}
      ></div>

      <div className="feature3" style={{ backgroundColor: "#fafafa" }}>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "2em" }}
        >
          <div>
            <img
              src={feature3}
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
          <div style={{ marginLeft: "2em" }}>
            <h1>Feature 3</h1>
            <p>
              Feature Description. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sunt inventore est natus sit, reiciendis earum
              quaerat culpa aliquam! Rerum quasi tempore aliquid, eum iusto
              ipsam est accusamus sequi quae odio.
            </p>
          </div>
        </div>
      </div>

      <div
        class="ui divider"
        wfd-id="65"
        style={{ marginTop: "3em", marginBottom: "3em" }}
      ></div>

      <div className="feature4">
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "2em" }}
        >
          <div>
            <h1>Feature 4</h1>
            <p>
              Feature Description. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sunt inventore est natus sit, reiciendis earum
              quaerat culpa aliquam! Rerum quasi tempore aliquid, eum iusto
              ipsam est accusamus sequi quae odio.
            </p>
          </div>
          <div>
            <img
              src={feature4}
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
  );
};

export default IntroSection;
