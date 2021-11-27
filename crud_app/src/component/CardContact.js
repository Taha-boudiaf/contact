import React from "react";
import { Avatar, Button, Card, CardContent, Typography } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { deepPurple } from "@mui/material/colors";

const CardContact = ({ contact, deleteContact }) => {
  const { id, userName, email, phone } = contact;

  return (
    <>
      <Card
        style={{
          marginTop: "15px",
          background: "#DDD6FE",
          display: "flex",
          alignItems: "center",
        }}
      >
        <CardContent>
          <Avatar sx={{ bgcolor: deepPurple[400] }}></Avatar>
        </CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              {userName}
            </Typography>
            <Typography component="div">{email}</Typography>
            <Typography component="div">{phone}</Typography>
          </CardContent>
          <CardContent>
            <Button>
              <ModeEditOutlineOutlinedIcon />
            </Button>
            <Button onClick={() => deleteContact(id)}>
              <DeleteOutlinedIcon color="error" />
            </Button>
          </CardContent>
        </div>
      </Card>
    </>
  );
};

export default CardContact;
