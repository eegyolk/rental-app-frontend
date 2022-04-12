import { Box } from '@chakra-ui/react';
import { useRoutes } from 'react-router-dom';

import headerNavigationRoutes from '../routes/headerNavigationRoutes';

function App() {
  const routes = useRoutes(headerNavigationRoutes);

  return (
    <Box w="100%" textAlign="center">
      {routes}
    </Box>
  );
}

export default App;
