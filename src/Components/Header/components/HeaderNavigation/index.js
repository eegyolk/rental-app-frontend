import { Link, Outlet } from 'react-router-dom';

import './style.css';

function HeaderNavigation() {
  return (
    <div>
      <nav>
        <ul className="HeaderNavigation-ul">
          <li className="HeaderNavigation-li">
            <Link to="/">Home</Link>
          </li>
          <li className="HeaderNavigation-li">
            <Link to="/search">Search</Link>
          </li>
          <li className="HeaderNavigation-li">
            <Link to="/renter">For renters</Link>
          </li>
          <li className="HeaderNavigation-li">
            <Link to="/agent">For agents</Link>
          </li>
          <li className="HeaderNavigation-li">
            <Link to="/landlord">For landlords</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default HeaderNavigation;
