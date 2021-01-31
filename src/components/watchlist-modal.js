import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function WatchlistModal(props) {
    const [show, setShow] = useState(props.show);

    useEffect(() => {
        setShow(props.show)
    }, [props.show])

    const handleClose = (buttonClick) => props.onModalClose(buttonClick);

    return (
        <>
            <Modal show={show} onHide={e => handleClose(null)}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.body}
                </Modal.Body>
                <Modal.Footer>
                    {props.onModalSaveButtonClick ?
                        <Button variant="secondary" onClick={e => props.onModalSaveButtonClick()}>
                            Save
                    </Button> : <></>}
                    <Button variant="secondary" onClick={e => handleClose(null)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}



WatchlistModal.propTypes = {
    show: PropTypes.bool.isRequired,
    body: PropTypes.element.isRequired,
    onModalClose: PropTypes.func.isRequired,
    onModalSaveButtonClick: PropTypes.func,
    title: PropTypes.string.isRequired
}

export default WatchlistModal;