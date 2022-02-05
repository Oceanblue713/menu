import React from "react";
import { Container, CardMedia, Typography } from "@mui/material";
import classes from "./ArticleContainer.module.css";

const ArticleContainer = (props) => {
  return (
    <Container fixed disableGutters>
      <CardMedia
        component="img"
        height="400"
        width="100vw"
        image=""
        alt=""
        className="articleimage1"
      />
      <Typography variant="h3">First Cruise</Typography>
      <Typography variant="body1" gutterBottom></Typography>
    </Container>
  );
};

export default ArticleContainer;
