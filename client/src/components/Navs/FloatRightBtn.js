import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';

const FloatRightButton = (props) => {
  const { value, onClick } = props;
  const onClickHandler = useCallback(() => onClick());
  return (
    <button type="button" className="btn btn-primary btn-lg float-right" onClick={onClickHandler}>
      {value}
    </button>
  );
};

FloatRightButton.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func
};

export default memo(FloatRightButton);
