import React, { memo, useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default memo(Home);
