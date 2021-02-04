import { ReactReduxContext } from "react-redux";
import { combineReducers } from "redux";
import WatchlistReducer from "./watchlist-reducer";

export default combineReducers({ WatchlistReducer });
