import React from "react";
import { Avatar, Button, Card, CardContent, Typography } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { deepPurple } from "@mui/material/colors";

const CardContact = ({ contact }) => {
  const { username, email } = contact;
  return (
    <>
      <Card
        style={{
          marginTop: "15px",
          background: "#DDD6FE",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
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
    </>
  );
};

export default CardContact;
