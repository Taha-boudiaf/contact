import React, { useEffect, useState } from "react";
import { Container, Divider, Paper } from "@mui/material";
import { Box } from "@mui/system";
import api from "./api/Contacts";
import ContactList from "./component/ContactList";
import ContactForm from "./component/ContactForm";
import Navbar from "./component/layout/Navbar";

function App() {
  // data
  const [contacts, setContact] = useState([]);
  // function to receive data from child
  const handleState = async (state) => {
    const request = {
      ...state,
    };
    const res = await api.post("/contact", request);
    setContact([...contacts, res.data]);
  };
  // function to delete contact
  const removeContact = (id) => {
    const NewContact = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContact(NewContact);
  };
  //retrieve the contact
  const retrieveContact = async () => {
    const res = await api.get("./contact");
    return res.data;
  };
  // async data
  useEffect(() => {
    const getAllContact = async () => {
      const allContact = await retrieveContact();
      if (allContact) setContact(allContact);
    };
    getAllContact();
  }, []);
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
