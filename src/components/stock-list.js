import StockItem from "./stock-item";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";
import WantchlistModal from "./watchlist-modal";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import {
  removeStockFromWatchlistAction,
  addStockToWatchlistAction,
} from "./../redux/actions";

const MAX_WATCHLIST_LENGTH = 2;

function StockList(props) {
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    if (props.watchlist.length > MAX_WATCHLIST_LENGTH) {
      setModalShow(true);
    }
  }, [props.watchlist]);

  const modalBody = (
    <>
      {props.watchlist.map((s) => (
        <div onClick={(e) => onModalClose(s)} sey={s}>
          {s}
        </div>
      ))}
    </>
  );

  const onModalClose = (stockSymbol) => {
    if (stockSymbol === "close") {
      setModalShow(false);
      return;
    }
    if (stockSymbol) {
      props.removeStockFromWatchlistAction(stockSymbol);
    }
    if (props.watchlist.length >= MAX_WATCHLIST_LENGTH) {
      setModalShow(false);
    }
  };
  return (
    <>
      <WantchlistModal
        show={modalShow}
        body={modalBody}
        onModalSaveButtonClick={(e) => console.log(e)}
        onModalClose={onModalClose}
        title={"Select stock to remove from watchlist"}
      />
      <Row>
        {props.stockList.map((s) => (
          <Col key={s} xs={4} md={2}>
            <StockItem symbol={s} />
          </Col>
        ))}
      </Row>
    </>
  );
}

StockList.propTypes = {
  StockList: PropTypes.array.isRequired,
};

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

export default connect(mapStateToProps, mapDispatchToProps)(StockList);
