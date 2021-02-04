import {
  removeStockFromWatchlist,
  addStockToWatchlist,
} from "./../action-types";

const initial_state = {
  watchlist: [],
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case addStockToWatchlist: {
      return {
        watchlist: [...state.watchlist, action.payload],
      };
    }
    case removeStockFromWatchlist: {
      state.watchlist.splice(state.watchlist.indexOf(action.payload), 1);
      return {
        watchlist: [...state.watchlist],
      };
    }
    default:
      return state;
  }
}
