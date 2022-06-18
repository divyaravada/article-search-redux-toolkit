import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchArticleById } from "../../features/articles/articleSlice";

const ArticleDetails = ({ match }) => {
  const { articleId } = match.params;

  let id = "nyt://article/".concat(articleId);
  console.log("id", articleId);

  let article = useSelector((state) => fetchArticleById(state, id));

  console.log("data", article);

  return (
    <div className="appAlignment  p-3">
      <Link to="/">
        <h5 className="fw-bold">back to home page</h5>
      </Link>
      <h5>{article.headline.main}</h5>
      <p>{article.pub_date}</p>
      <p>{article.lead_paragraph}</p>
      <a href={article.web_url}>see th full page</a>
    </div>
  );
};

export default ArticleDetails;
