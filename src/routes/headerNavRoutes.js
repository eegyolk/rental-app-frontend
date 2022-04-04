import HeaderNav from '../Components/HeaderNav';

import homeRoute from '../Pages/Home/route';
import searchRoute from '../Pages/Search/route';
import renterRoute from '../Pages/Renter/route';
import agentRoute from '../Pages/Agent/route';
import landlordRoute from '../Pages/Landlord/route';

const headerNavRoutes = [
  {
    path: '/',
    element: <HeaderNav />,
    children: [homeRoute, searchRoute, renterRoute, agentRoute, landlordRoute],
  },
];

export default headerNavRoutes;
