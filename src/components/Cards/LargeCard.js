import React from "react";
import { IconButton } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { DeleteOutline } from "@material-ui/icons";
import Grid from "@mui/material/Grid";

export default function LargeCard() {
  return (
    <Card md={{ height: 300, width: 300 }}>
      <CardMedia component="img" height="200" image="" alt="" />
      <CardContent>
        <Typography gutterBottom variant="h6">
          Cruise
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Welcome to the cruise world. Are you a new?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  );
}
