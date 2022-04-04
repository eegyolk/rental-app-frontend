import { useRoutes } from 'react-router-dom';

import headerNavigationRoutes from '../../routes/headerNavigationRoutes';
import HeaderAnnouncement from './components/HeaderAnnouncement';

function Header() {
  const routes = useRoutes(headerNavigationRoutes);

  return (
    <div>
      <div>
        <HeaderAnnouncement />
      </div>
      <div>
        {/* LOGO HERE */}
        {routes}
      </div>
    </div>
  );
}

export default Header;
