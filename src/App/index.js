import { useRoutes } from 'react-router-dom';

import headerNavigationRoutes from '../routes/headerNavigationRoutes';

function App() {
  const routes = useRoutes(headerNavigationRoutes);

  return <div>{routes}</div>;
}

export default App;
