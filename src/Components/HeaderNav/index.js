import { Link, Outlet } from 'react-router-dom';
import './style.css';

function HeaderNav() {
  return (
    <div>
      <nav>
        <ul className="HeaderNav-ul">
          <li className="HeaderNav-li">
            <Link to="/">Home</Link>
          </li>
          <li className="HeaderNav-li">
            <Link to="/search">Search</Link>
          </li>
          <li className="HeaderNav-li">
            <Link to="/renter">For renters</Link>
          </li>
          <li className="HeaderNav-li">
            <Link to="/agent">For agents</Link>
          </li>
          <li className="HeaderNav-li">
            <Link to="/landlord">For landlords</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default HeaderNav;
