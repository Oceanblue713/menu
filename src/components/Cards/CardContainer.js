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
          <Grid item xs={12} sm={6} md={4}>
            <LargeCard
              key={item.title_en}
              title={item.title_en}
              article={replaceDot(item.article_en)}
              image={item.image}
              link={item.link}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
