import React, { Component, useState } from "react";
import StockList from "./components/stock-list";
import TextInputFilter from "./components/text-input-filter";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";

function App(props) {
  const theStocks = [
    "appl",
    "gme",
    "fb",
    "crm",
    "jnj",
    "amzn",
    "pld",
    "intc",
    "xrx",
    "baba",
    "adbe",
    "stmp",
    "vsat",
    "tsla",
  ];

  let [filteredStocks, setFilteredStocks] = useState([...theStocks]);

  const onInputChange = (theValue) => {
    setFilteredStocks(theStocks.filter((s) => s.indexOf(theValue) > -1)); // Reterns a new array.
  };

  return (
    <Container>
      <div>
        <h2>Stock in watch</h2>
        {props.watchlist.join(" - ")}
      </div>
      <TextInputFilter onInputChange={onInputChange} />
      <StockList stockList={filteredStocks} />
    </Container>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    // There are several reducers on the state choose the one for you (WatchlistReducer).
    watchlist: state.WatchlistReducer.watchlist,
  };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
