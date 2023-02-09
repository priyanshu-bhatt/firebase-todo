import React from "react";

export default function Header(props) {
  return (
    <div style={{ backgroundColor: "aliceblue" }}>
      <h2 style={{textAlign:"center"}}>
        {props.name ? `Welcome  ${props.name}! ` : "login please"}
      </h2>
    </div>
  );
}
