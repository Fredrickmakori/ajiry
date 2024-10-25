import "./ui.css";
import logo from "./logo.png";
import React from "react";
import Button from "./Button";
import { Link, useLocation } from "react-router-dom";

export default function Dashbord(props) {
  const links = [
    { title: "Graduation", path: "/graduation" },
    { title: "Home", path: "/" },
    { title: "Exam", path: "/exam" },
    { title: "Registration", path: "/registration" },
    { title: "Clearance", path: "/clearance" },
    { title: "Payment", path: "/payment" },
  ];

  const location = useLocation();

  return (
    <div className="dsbCont" style={{ padding: "20px", textAlign: "center" }}>
      <div className="dsblogo">
        <img src={logo} alt="institution logo" />
      </div>
      <div className="dsbcont">
        <p className="dsbtitle">Welcome to the {props.title} page</p>
        <div className="dsbnav">
          {links.map(
            (link) =>
              link.path !== location.pathname && (
                <div className="nav" key={link.path} style={{ margin: "10px" }}>
                  <Link to={link.path}>
                    <Button type="nav" text={link.title} />
                  </Link>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
