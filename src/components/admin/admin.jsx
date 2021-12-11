import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

class Admin extends React.Component {
  render() {
    return (
      <div>
      <Button
      color="inherit"
      to="/doctors"
      component={NavLink}
      style={{ marginRight: "auto" }}
    >
     <h3>Doctors</h3> 
    </Button>
    <Button
      color="inherit"
      to="/finances"
      component={NavLink}
      style={{ marginRight: "auto" }}
    >
      <h3>Finance</h3>
    </Button>
    <Button
      color="inherit"
      to="/patients"
      component={NavLink}
      style={{ marginRight: "auto" }}
    >
      <h3>Patients</h3>
    </Button>
     
    
      </div>
    );
  }
}

export default Admin;