import React, { Component , useContext } from "react";
import NewsContext from "../context/newscontext";

//recp

export default function NavigationBar() {
  const Context = useContext(NewsContext);
 
  const NavigationBg = {
    backgroundColor: "#111111",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  };
  const Navitem = {

      color: "black",
    padding: "13px",
    textDecoration: "none",
  };
  const secondNav = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderBottom: "1px solid black",
  };


  return (
    <>
      <div   style={NavigationBg}        >
          <img src="/Logo.png" alt="Logo" width={250} height={100} />
      </div>

      <div className="container" style={secondNav}>
        <a className="nav-link active"
          aria-current="page"
          href="/"
          style={Navitem}
          onClick={()=>{ Context.SetHeading("Top Headlines")} }
        >
          Home
        </a>
        <a className="nav-link" aria-current="page" href="/" style={Navitem} onClick={()=>{ Context.SetHeading("Latest News")} }>
          Latest
        </a>
        <a className="nav-link" aria-current="page" href="/" style={Navitem} onClick={()=>{ Context.SetHeading("Entertainment")} }>
          Entertainment
        </a>
        <a className="nav-link" aria-current="page" href="/" style={Navitem} onClick={()=>{ Context.SetHeading("Sports")} }>
          Sports
        </a>
        <a className="nav-link" aria-current="page" href="/" style={Navitem} onClick={()=>{ Context.SetHeading("Technology")} }>
          Technology
        </a>
        <a className="nav-link" aria-current="page" href="/" style={Navitem} onClick={()=>{ Context.SetHeading("Health and Care")} }> 
          Health
        </a>
      </div>
    </>
  );
}

