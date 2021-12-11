import { Typography } from "@mui/material";
import React, { Component } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="h5">Home page</Typography>
        <CssBaseline />
        <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
      </div>
    );
  }
}

export default Home;