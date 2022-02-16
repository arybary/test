import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk"
import newsReducer from "./table/table.reducer";



const logger = (state) => (next) => (action) => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};
const reducer = combineReducers({news:newsReducer});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk,logger)));
export default store;