import { createSelector } from "reselect";

export  const newsSelector = (state) => (state.news.newsData);
export const newsSelectorSortName = (state) => state.news.toTitleHeder;
