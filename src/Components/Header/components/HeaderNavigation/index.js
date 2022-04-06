import { Link } from 'react-router-dom';

function HeaderNavigation() {
  return (
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
  );
}

export default HeaderNavigation;
