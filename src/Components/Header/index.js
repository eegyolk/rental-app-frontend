import { useRoutes } from 'react-router-dom';
import './style.css';
import headerNavRoutes from '../../routes/headerNavRoutes';

function Header() {
  const routes = useRoutes(headerNavRoutes);

  return (
    <div>
      {/* LOGO HERE */}
      {routes}
    </div>
  );
}

export default Header;
