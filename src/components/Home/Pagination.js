import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncArticles } from "../../features/articles/articleSlice";

const Pagination = () => {
  const [perPage, setPerPage] = useState(5);
  const [pageNumber, setPageNumber] = useState(0);
  const dispatch = useDispatch();

  const NextHandler = () => {
    const NextPage = pageNumber + 1;
    const filter = { NextPage, perPage };
    dispatch(fetchAsyncArticles(filter));
    setPageNumber("");
    setPerPage(5);
  };

  const PreviousHandler = () => {
    const PrevPage = pageNumber - 1;
    const filter = { PrevPage, perPage };
    dispatch(fetchAsyncArticles(filter));
    setPageNumber("");
    setPerPage(5);
  };
  return (
    <div className="d-flex justify-content-between">
      <button className="btn" onClick={PreviousHandler}>
        Prev
      </button>
      <button className="btn" onClick={NextHandler}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
