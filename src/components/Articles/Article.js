import React from "react";
import { Container, CardMedia, Typography } from "@mui/material";
import classes from "./Article.module.css";

const Article = (props) => {
  return (
    <Container fixed disableGutters>
      <CardMedia
        component="img"
        height="400"
        width="100vw"
        image={props.image}
        alt=""
        className="article-image "
      />
      <Typography variant="h3">{props.title}</Typography>
      <Typography variant="body1" gutterBottom>
        {props.article}
      </Typography>
    </Container>
  );
};

export default Article;
