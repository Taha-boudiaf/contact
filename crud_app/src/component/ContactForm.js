import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

const ContactForm = ({ handleState }) => {
  // state to save information
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  // function to send data from child to parent
  const handleClick = (e) => {
    e.preventDefault();
    handleState({ id: 3, userName: userName, email: email });
    setUserName("");
    setEmail("");
  };

  return (
    <Box style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Typography variant="h5" style={{ fontWeight: "550" }}>
        Add Contact
      </Typography>
      <TextField
        value={userName}
        label="userName"
        style={{ marginTop: "10px" }}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        value={email}
        label="Email"
        style={{ marginTop: "10px" }}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        style={{ marginTop: "20px" }}
        onClick={handleClick}
      >
        Add Contact
      </Button>
    </Box>
  );
};

export default ContactForm;
