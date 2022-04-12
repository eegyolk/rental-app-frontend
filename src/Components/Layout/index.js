import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

function Layout() {
  return (
    <Box w="90%" display="inline-block">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Box>
  );
}

export default Layout;
