import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import { actToggleRedirect } from '../../redux/actions/modal.actions';

const RedirectModal = (props: any) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClose = useCallback(() => {
    dispatch(actToggleRedirect(false));
    history.push(props.redirectPath);
  }, []);

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
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

RedirectModal.propTypes = {
  isShow: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
  redirectPath: PropTypes.string
};

export default memo(RedirectModal);
