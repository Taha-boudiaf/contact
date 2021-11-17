import React from "react";
import Navbar from "./component/layout/Navbar";
import { Container, Divider, Paper } from "@mui/material";

import ContactList from "./component/ContactList";
import ContactForm from "./component/ContactForm";

import "./App.css";
import { Box } from "@mui/system";

function App() {
  const contacts = [
    { id: 1, username: "taher boudiaf", email: "taher@gmail.com" },
    { id: 2, username: "sami nadir", email: "sami@gmail.com" },
  ];
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Paper elevation={3} style={{ padding: "50px", margin: "50px" }}>
          <Box>
            <ContactForm />
          </Box>
          <Divider />
          <Box style={{ marginTop: "30px" }}>
            <ContactList contacts={contacts} />
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
