import React, { useState } from "react";
// import "./App.css";
import { signOut } from "firebase/auth";
import MainSection from "./MainSection";
import Sidenav from "./Sidenav";
import Header from "./Header";
import ErrorMessage from "./ErrorMessage";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
function App(props) {
  const[active,setactive]= useState("INBOX")
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
    return (
      <div>
        {props.name ? (
          <div>
            <Header name={props.name} />
            <div className="row">
              <div className="col-md-2">
                <Sidenav change={setactive} />
              </div>
              <div className="col-md-10">
                <MainSection active={active} />
              </div>
            </div>
            <div style={{ position:"relative", marginLeft: "1210px", marginTop: "-695px" }}>
              <button className="btn btn-danger btn-lg " onClick={handleSignOut}>
                Log Out
              </button>
            </div>
          </div>
        ) : (
          
            <ErrorMessage/>
         
        )}
      </div>
    );
  }
  
  export default App;
