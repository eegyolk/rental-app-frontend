import { useRoutes } from 'react-router-dom';

import HeaderAnnouncement from './components/HeaderAnnouncement';
import './style.css';
import headerNavRoutes from '../../routes/headerNavRoutes';

function Header() {
  const routes = useRoutes(headerNavRoutes);

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
