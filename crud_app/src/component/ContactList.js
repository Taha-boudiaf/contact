import { Button, Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
const ContactList = ({ contact }) => {
  return (
    <div>
      <Box style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Typography variant="h5">List Contact</Typography>
        {contact.map((contact) => {
          const { username, email, id } = contact;
          return (
            <Card
              style={{
                marginTop: "15px",
                background: "#DDD6FE",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              key={id}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  {username}
                </Typography>
                <Typography component="div">{email}</Typography>
              </CardContent>
              <CardContent>
                <Button>
                  <ModeEditOutlineOutlinedIcon />
                </Button>
                <Button>
                  <DeleteOutlinedIcon color="error" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </div>
  );
};

export default ContactList;
