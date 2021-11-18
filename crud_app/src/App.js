import React, { useState } from "react";
import { Container, Divider, Paper } from "@mui/material";
import { Box } from "@mui/system";

import ContactList from "./component/ContactList";
import ContactForm from "./component/ContactForm";
import Navbar from "./component/layout/Navbar";

function App() {
  // data
  const [contacts, setContact] = useState([
    { id: 1, userName: "taher boudiaf", email: "taher@gmail.com" },
    { id: 2, userName: "sami nadir", email: "sami@gmail.com" },
  ]);
  // function to receive data from child
  const handleState = (state) => {
    setContact([...contacts, state]);
  };
  // function to delete contact
  const removeContact = (id) => {
    const NewContact = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContact(NewContact);
  };
  return (
    <div>
      <Navbar />
      <Container>
        <Paper elevation={3} style={{ padding: "50px", margin: "50px" }}>
          <Box>
            <ContactForm handleState={handleState} />
          </Box>
          <Divider />
          <Box style={{ marginTop: "30px" }}>
            <ContactList contacts={contacts} removeContact={removeContact} />
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
