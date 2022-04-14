import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { queryAnnouncement } from '../HomePage/reducer/actionTypes';

function AgentPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(queryAnnouncement());
  }, []);

  return (
    <div className="AgentPage">
      <header className="AgentPage-header">AgentPage</header>
      <p>This is my agent page.</p>
    </div>
  );
}

export default AgentPage;
