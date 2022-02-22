import React from "react";
import { Container, CardMedia, Typography, Box } from "@mui/material";
import classes from "./Article.module.css";

const Article = (props) => {
  return (
    <Container fixed disableGutters maxWidth="md">
      <Box className="article-image">
        <CardMedia
          component="img"
          height="400"
          width="100vw"
          image={props.image}
          alt=""
        />
        <Typography variant="h3">{props.title}</Typography>
        <Typography variant="body1" gutterBottom>
          {props.article}
        </Typography>
      </Box>
    </Container>
  );
};

export default Article;
