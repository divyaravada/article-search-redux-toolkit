import React from "react";
import { useSelector } from "react-redux";
import { getAllArticles } from "../../features/articles/articleSlice";
import ArticleCard from "../ArticleCard/ArticleCard";

const ArticleListing = () => {
  const status = useSelector((state) => state.articles.status);
  const error = useSelector((state) => state.articles.error);

  const articles = useSelector(getAllArticles);

  console.log("articles..", articles);

  let content;

  if (status === "loading") {
    content = <h1>Loading...</h1>;
  } else if (status === "succeeded") {
    // Sort articles in reverse chronological order by datetime string*/

    content = articles.response.docs.map((article) => (
      <ArticleCard key={article._id} article={article} />
    ));
  } else if (status === "failed") {
    content = <div>{error}</div>;
  }

  console.log("content", content);

  return (
    <div>
      <h6>Result</h6>
      <div>
        <h5 className="font-bold"> {content}</h5>
      </div>
    </div>
  );
};

export default ArticleListing;
