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
import LargeCard from "./LargeCard";

export default function CardContainer() {
  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={4}>
        <LargeCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <LargeCard />
      </Grid>
    </Grid>
  );
}
