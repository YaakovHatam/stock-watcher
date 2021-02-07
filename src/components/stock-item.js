import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import {
  removeStockFromWatchlistAction,
  addStockToWatchlistAction,
} from "./../redux/actions";

const CHECKBOXES_CHECKED = 3;

function StockItem(props) {
	 useEffect(() => {
    if (props.watchlist.length > CHECKBOXES_CHECKED) {
      props.removeStockFromWatchlistAction(props.watchlist["symbol"]);
    }
  }, [props.watchlist]);
	 
  const toggleWatchlistStock = (e) => {
    props[
      !e.target.checked
        ? "removeStockFromWatchlistAction"
        : "addStockToWatchlistAction"
    ](props.symbol);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.symbol}</Card.Title>
        <Card.Text>
          <label>
            In watchlist:{" "}
            <input
              checked={props.watchlist.indexOf(props.symbol) > -1}
              onChange={toggleWatchlistStock}
              type="checkbox"
            ></input>
          </label>
        </Card.Text>
        <Button variant="primary">Add to track</Button>
      </Card.Body>
    </Card>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    // There are several reducers on the state choose the one for you (WatchlistReducer).
    watchlist: state.WatchlistReducer.watchlist,
  };
}

const mapDispatchToProps = {
  addStockToWatchlistAction,
  removeStockFromWatchlistAction,
};

StockItem.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(StockItem);
