import { NEWS_RECIEVED, NAME_SHETTS } from "./table.actions";


const initialState = { newsData: [], toTitleHeder: "", name: "news", numPage:1 };
const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_RECIEVED: {
      console.log(state.name === action.payload.name);
      const newsDataNext =
        state.name === action.payload.name
          ? action.payload.newsData.concat(state.newsData)
          : action.payload.newsData;
      return { ...state, ...{ newsData: newsDataNext, name: action.payload.name } };
    }
    case NAME_SHETTS: {
      const name = action.payload.toTitleHeder;

      const sortNews =
        name === state.toTitleHeder
          ? state.newsData.slice().reverse()
          : state.newsData.slice().sort((a, b) => {
              if (a[name] > b[name]) {
                return 1;
              }
              if (a[name] < b[name]) {
                return -1;
              }

              return 0;
            });

      return { ...state, newsData: sortNews, toTitleHeder: name };
    }
    default:
      return state;
  }
};
export default newsReducer;
