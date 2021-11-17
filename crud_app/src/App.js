import React, { useState } from "react";
import Navbar from "./component/layout/Navbar";
import { Container, Divider, Paper } from "@mui/material";

import ContactList from "./component/ContactList";
import ContactForm from "./component/ContactForm";

import "./App.css";
import { Box } from "@mui/system";

function App() {
  // data
  const [contacts, setContact] = useState([
    { id: 1, userName: "taher boudiaf", email: "taher@gmail.com" },
    { id: 2, userName: "sami nadir", email: "sami@gmail.com" },
  ]);
  // functionm to receive data from child
  const handleState = (state) => {
    setContact([...contacts, state]);
  };

  return (
    <div className="App">
      <Navbar />
      <Container>
        <Paper elevation={3} style={{ padding: "50px", margin: "50px" }}>
          <Box>
            <ContactForm handleState={handleState} />
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
