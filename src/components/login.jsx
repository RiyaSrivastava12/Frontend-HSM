import React, { Component } from "react";
//import TextField from "@mui/material/TextField";
//import Box from "@mui/material/Box";

import {
  TextField,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Paper,
  Button,
  Typography,
} from "@mui/material";

class Login extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "20px",
        }}
      >
        <Typography variant="h5">Login Form</Typography>
        <Paper elevation={3}>
          <Box component="form" noValidate autoComplete="off" padding={2}>
            <TextField
              id="filled-basic"
              label="Email"
              variant="filled"
              type="email"
              style={{ marginBottom: 10 }}
              fullWidth
            />
            <TextField
              id="filled-basic"
              label="Password"
              variant="filled"
              type="password"
              fullWidth
              style={{ marginBottom: 10 }}
            />
            <FormControl variant="filled" fullWidth>
              <InputLabel id="demo-simple-select-filled-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="customer">Customer</MenuItem>
                <MenuItem value="student">Student</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" fullWidth style={{ marginTop: "10px" }}>
              Submit
            </Button>
          </Box>
        </Paper>
      </div>
    );
  }
}

export default Login;