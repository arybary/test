export const NEWS_RECIEVED = "NEWS/RECIEVED";
export const NAME_SHETTS = "NAME_SHETTS";

export const newsDataRecieved = (newsData, name,numPage) => {
  const action = {
    type: NEWS_RECIEVED,
    payload: { newsData, name,numPage },
  };
  return action;
};
export const sortNewsData = (toTitleHeder) => {
  const action = {
    type: NAME_SHETTS,
    payload: { toTitleHeder },
  };
  return action;
};

export const getNewsData = (name,numPage) => {console.log(name,numPage)
  const thunkAction = function (dispatch) {
    fetch(`https://api.hnpwa.com/v0/${name}/${numPage}.json`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((newsData) => dispatch(newsDataRecieved(newsData, name,numPage)));
  };
  return thunkAction;
};
