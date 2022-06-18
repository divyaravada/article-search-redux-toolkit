import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ArticleApi from "../../common/ArticleApi";
import { APIKey } from "../../common/ArticleApiKey";

export const fetchAsyncArticles = createAsyncThunk(
  "articles/fetchAsyncArticles",
  async ({ search, pageNumber, perPage }) => {
    const response = await ArticleApi.get(
      `?q=${search}&api-key=${APIKey}&page=${pageNumber}&per_page=${perPage}`
    );
    return response.data;
  }
);

const initialState = {
  articles: {},
  status: "idle",
  error: "null",
  pageNumber: 0,
  perPage: 5,
};

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    addArticles: (state, { payload }) => {
      state.articles = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAsyncArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAsyncArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.articles = action.payload;
      })
      .addCase(fetchAsyncArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addArticles } = articleSlice.actions;
export const getAllArticles = (state) => state.articles.articles;
export const fetchArticleById = (state, articleId) =>
  state.articles.articles.response.docs.find(
    (article) => article._id === articleId
  );

export default articleSlice.reducer;
