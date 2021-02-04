import { removeStockFromWatchlist, addStockToWatchlist } from "./action-types";

// Called from the component.
// This will connect the action with the reducer
// It will call the reducer and pass in the action.

export const addStockToWatchlistAction = (item) => ({
  type: addStockToWatchlist,
  payload: item,
});

export const removeStockFromWatchlistAction = (item) => ({
  type: removeStockFromWatchlist,
  payload: item,
});
