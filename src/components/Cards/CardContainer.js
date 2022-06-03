import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import LargeCard from "./LargeCard";
import { articles } from "../../articles/article1";
import Box from "@mui/material/Box";

export default function CardContainer() {
  const [contents, setContents] = useState([]);

  const replaceDot = (article) => {
    const _article = article.split(" ");
    let panelWord = [];
    for (let i = 0; i < 16; i++) {
      panelWord.push(_article[i]);
    }
    panelWord = panelWord.join(" ");
    panelWord += " ...";
    return panelWord;
  };

  return (
    <Grid container spacing={2}>
      {articles.map((item) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <LargeCard
              key={item.id}
              title={item.title}
              article={replaceDot(item.article)}
              image={item.image}
              link={item.link}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
