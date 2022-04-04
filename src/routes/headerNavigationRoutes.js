import HeaderNavigation from '../Components/Header/components/HeaderNavigation';
import homeRoute from '../Pages/HomePage/route';
import searchRoute from '../Pages/SearchPage/route';
import renterRoute from '../Pages/RenterPage/route';
import agentRoute from '../Pages/AgentPage/route';
import landlordRoute from '../Pages/LandlordPage/route';

const headerNavigationRoutes = [
  {
    path: '/',
    element: <HeaderNavigation />,
    children: [homeRoute, searchRoute, renterRoute, agentRoute, landlordRoute],
  },
];

export default headerNavigationRoutes;
