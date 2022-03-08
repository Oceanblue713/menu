import { useEffect, useState } from "react";
import { Container, CardMedia, Typography, Box } from "@mui/material";
import classes from "./Article.module.css";
import { articles } from "../../articles/article1";
import { useParams } from "react-router-dom";

const Article = () => {
  let { link } = useParams();

  console.log(link);
  return (
    <Container fixed disableGutters maxWidth="md">
      <Box className="article-image">
        <CardMedia component="img" height="400" width="100vw" image="" alt="" />
        <Typography variant="h3">{articles[0].title_en}</Typography>
        <Typography variant="body1" gutterBottom>
          {link}
        </Typography>
      </Box>
    </Container>
  );
};

export default Article;
