import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { queryAnnouncement } from '../HomePage/reducer/actionTypes';

function RenterPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(queryAnnouncement());
  }, []);

  return (
    <div className="RenterPage">
      <header className="RenterPage-header">RenterPage</header>
      <p>This is my renter page.</p>
    </div>
  );
}

export default RenterPage;
