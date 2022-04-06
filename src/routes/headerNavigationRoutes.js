import Layout from '../Components/Layout';
import homeRoute from '../Pages/HomePage/route';
import searchRoute from '../Pages/SearchPage/route';
import renterRoute from '../Pages/RenterPage/route';
import agentRoute from '../Pages/AgentPage/route';
import landlordRoute from '../Pages/LandlordPage/route';
import propertyRoute from '../Pages/PropertyPage/route';

const headerNavigationRoutes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      homeRoute,
      searchRoute,
      renterRoute,
      agentRoute,
      landlordRoute,
      propertyRoute,
    ],
  },
];

export default headerNavigationRoutes;
