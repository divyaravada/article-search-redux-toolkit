import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = (props) => {
  const { article } = props;
  console.log("data", article);
  return (
    <div className="border border-1 p-3">
      <Link to={`/article/${article._id}`}>
        <h5 className="fw-bold">{article.headline.main}</h5>
      </Link>
    </div>
  );
};

export default ArticleCard;
