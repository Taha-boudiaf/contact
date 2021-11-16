import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

const ContactForm = () => {
  return (
    <Box style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Typography variant="h5">Add Contact</Typography>
      <TextField label="userName" style={{ marginTop: "10px" }} />
      <TextField label="Email" style={{ marginTop: "10px" }} />
      <Button variant="contained" style={{ marginTop: "20px" }}>
        Add Contact
      </Button>
    </Box>
  );
};

export default ContactForm;
