import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncArticles } from "../../features/articles/articleSlice";
import ArticleListing from "../ArticleListing/ArticleListing";
import Pagination from "./Pagination";
import Search from "./Search";

const Home = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.articles.status);

  const pageNumber = 0;
  const searchText = "";
  const perPage = 5;

  useEffect(() => {
    if (status === "idle") {
      let filter = {
        search: `${searchText}`,
        pageNumber: `${pageNumber}`,
        perPage: `${perPage}`,
      };
      dispatch(fetchAsyncArticles(filter));
    }
  }, [status, dispatch]);

  return (
    <div className="appAlignment">
      <h6 className="text-start">Type search query term in here:</h6>
      <Search />
      <ArticleListing />
      <Pagination />
    </div>
  );
};

export default Home;
