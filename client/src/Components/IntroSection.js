import React from "react";
import { Button } from "react-bootstrap";
import batman from "./batman.png";
import { Link } from "react-router-dom";

const IntroSection = () => {
  return (
    <div>
      <div className="main-intro" inline>
        <div className="content">
          <h1>
            {" "}
            Here We Can Write Main Slogan or Something for our Application.{" "}
          </h1>
          <p>
            {" "}
            Then some Deatils for our app. Rmember's boards, lists, and cards
            enable you to organize and prioritize your projects in a fun,
            flexible, and rewarding way. . Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Voluptates dolorem perferendis quaerat
            alias facere nesciunt laudantium vero omnis tempora, itaque
            veritatis temporibus iure nam. Reprehenderit est eius fuga totam id!
          </p>
          <Button id="sign-up-button" variant="success">
            <Link to="/signup">Sign Up For Free</Link>
          </Button>
        </div>
        {/* someone import this fucking image */}
        <div className="image">
          <image src={batman} alt="image" />
        </div>
      </div>
      <br />
      {/* Will insert an image after every p tag  */}
      <div className="info1">
        <div className="content">
          <h2>Never Forget with Rmember</h2>
          <p>
            You Forgot Some Shit today?? Rmember is there for you. Rmember is
            your own personalized todo which makes your life hastle free. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Qui praesentium
            natus totam rerum labore, officiis veniam exercitationem iste
            adipisci repellat tempore vel quo esse, ad cum, aliquam ea. Quidem,
            temporibus?
          </p>
          <Button id="sign-up-button" variant="success">
            <Link to="/signup">Never Forget Again</Link>
          </Button>
        </div>
      </div>
      <br />
      <div className="info2">
        <div className="content">
          <h2>Never Forget with Rmember</h2>
          <p>
            You Forgot Some Shit today?? Rmember is there for you. Rmember is
            your own personalized todo which makes your life hastle free. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Id iste dolore
            quisquam, quam ab et, voluptas error quae eaque quasi cum mollitia
            ratione autem tenetur sint voluptate odit officia optio.
          </p>
          <Button id="sign-up-button" variant="success">
            <Link to="/signup">Never Forget Again</Link>
          </Button>
        </div>
      </div>
      <br />
      <div className="info3">
        <div className="content">
          <h2>Never Forget with Rmember</h2>
          <p>
            You Forgot Some Shit today?? Rmember is there for you. Rmember is
            your own personalized todo which makes your life hastle free. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Sit quasi
            delectus quia alias, cum beatae, autem assumenda et, praesentium
            nulla mollitia natus voluptatem dicta id amet earum impedit!
            Voluptatum, nostrum?
          </p>
          <Button id="sign-up-button" variant="success">
            <Link to="/signup">Never Forget Again</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;