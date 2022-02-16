import React from "react";
import { Provider } from "react-redux";
import store from "./store.js";
import TableNews from "./table/component/TableNews.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <TableNews />
    </Provider>
  );
};

export default App;
