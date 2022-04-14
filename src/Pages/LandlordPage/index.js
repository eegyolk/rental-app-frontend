import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { queryAnnouncement } from '../HomePage/reducer/actionTypes';

function LandlordPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(queryAnnouncement());
  }, []);

  return (
    <div className="LandlordPage">
      <header className="LandlordPage-header">LandlordPage</header>
      <p>This is my landlord page.</p>
    </div>
  );
}

export default LandlordPage;
