import React from "react";
import { Box } from "@mui/system";
import CardContact from "./CardContact";
import { Typography } from "@mui/material";

const ContactList = ({ contacts, removeContact }) => {
  const deleteContact = (id) => {
    removeContact(id);
  };
  return (
    <div>
      <Box style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Typography variant="h5" style={{ fontWeight: "550" }}>
          List Contact
        </Typography>
        {contacts.map((contact) => {
          return (
            <CardContact
              contact={contact}
              key={contact.id}
              deleteContact={deleteContact}
            />
          );
        })}
      </Box>
    </div>
  );
};

export default ContactList;
