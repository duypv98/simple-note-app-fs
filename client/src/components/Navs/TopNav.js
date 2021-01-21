import { useEffect } from 'react';

const TopNav = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
};

export default TopNav;
