import React from "react";
import Article from "./Article";
import { articles } from "../../articles/article1";

const ArticleContainer = () => {
  // <Article
  //   title={articles[0].title_en}
  //   article={articles[0].article_en}
  //   image={articles[0].image}
  //   link={articles[0].link}
  // />
  return articles.map((item) => {
    <Article
      title={item.title_en}
      article={item.article_en}
      image={item.image}
      link={item.link}
    />;
  });
};

export default ArticleContainer;
