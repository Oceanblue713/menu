import React from "react";
import Article from "./Article";
import { articles } from "../../articles/article1";

const ArticleContainer = ({ id }) => {
  return (
    <Article
      id={articles[0].id}
      img="/images/image1_small.jpg"
      article={articles[0].article_en}
      link={articles[0].link}
    />
  );

  // return articles.map((item) => {
  //   <Article
  //     title={item.title_en}
  //     article={item.article_en}
  //     image={item.image}
  //     link={item.link}
  //   />;
  // });
};

export default ArticleContainer;
