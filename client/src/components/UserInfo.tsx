import React, { memo } from 'react';
import PropTypes from 'prop-types';

const UserInfo = (props: any) => {
  const { fullName, email, phone } = props;
  return (
    <div style={{ marginLeft: '1%' }}>
      <div>Hello: {fullName ?? 'Anonymous'}</div>
      <div>Your contact:</div>
      <ul>
        <li>Email: {email ?? ''}</li>
        <li>Phone: {phone ?? ''}</li>
      </ul>
    </div>
  );
};

UserInfo.propTypes = {
  fullName: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string
};

export default memo(UserInfo);
