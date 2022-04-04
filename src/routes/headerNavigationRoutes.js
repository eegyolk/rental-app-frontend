import HeaderNavigation from '../Components/Header/components/HeaderNavigation';
import homeRoute from '../Pages/Home/route';
import searchRoute from '../Pages/Search/route';
import renterRoute from '../Pages/Renter/route';
import agentRoute from '../Pages/Agent/route';
import landlordRoute from '../Pages/Landlord/route';

const headerNavigationRoutes = [
  {
    path: '/',
    element: <HeaderNavigation />,
    children: [homeRoute, searchRoute, renterRoute, agentRoute, landlordRoute],
  },
];

export default headerNavigationRoutes;
