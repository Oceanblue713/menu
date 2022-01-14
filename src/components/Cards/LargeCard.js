import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function LargeCard() {
  return (
    <Card sx={{ height: 300, width: 300 }}>
      <CardMedia component="img" height="200" image="" alt="" />
      <CardContent>
        <Typography gutterBottom variant="h6">
          Cruise
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Welcome to the cruise world. Are you a new? Looking for a right
          information about for newbie?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  );
}
