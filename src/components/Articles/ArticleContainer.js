import React from "react";
import Article from "./Article";
import { articles } from "../../articles/article1";

const ArticleContainer = () => {
  <Article img={articles[0].image} article={articles[0].article_en} />;
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
