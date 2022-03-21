import { Container, CardMedia, Typography, Box } from "@mui/material";
import { articles } from "../../articles/article1";
import { useParams } from "react-router-dom";
import "./Article.css";

export default function Article() {
  let { link } = useParams();

  const article = articles.find((item) => item.link === link);

  const subTitles = [];
  const subArticles = [];
  for (let key in article) {
    if (key.includes("sub_title_")) {
      subTitles.push(article[key]);
    }
    if (key.includes("sub_article_")) {
      subArticles.push(article[key]);
    }
  }

  let loopIndex = 0;
  if (subTitles.length > subArticles.length) {
    loopIndex = subTitles.length;
  } else {
    loopIndex = subArticles.length;
  }

  return (
    <Container fixed disableGutters maxWidth="md" className="article-top">
      <Box className="article-image">
        <CardMedia
          component="img"
          height="400"
          width="100vw"
          image={article.image}
          alt={article.article_en}
        />
        <Typography variant="h3">{article.title}</Typography>
        <Typography variant="body1" gutterBottom>
          {article.article}
        </Typography>
      </Box>
      {article.map((item, index) => {
        console.log(article);
      })}
      <SubSentence
        subTitle={article.sub_title_1}
        subArticle={article.sub_article_1}
      />
    </Container>
  );
}

const SubSentence = (props) => {
  const { subTitle, subArticle } = props;
  return (
    <>
      <h6>{subTitle}</h6>
      <p>{subArticle}</p>
    </>
  );
};
