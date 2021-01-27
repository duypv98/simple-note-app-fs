import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { actToggleAlert } from '../../redux/actions/modal.actions';

const AlertModal = (props: any) => {
  const dispatch = useDispatch();
  const handleClose = useCallback(() => dispatch(actToggleAlert(false)), []);

  return (
    <>
      <Modal
        show={props.isShow}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.message}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

AlertModal.propTypes = {
  isShow: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string
};

export default memo(AlertModal);
