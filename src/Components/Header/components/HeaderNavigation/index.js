import { Box, HStack, Link } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

function HeaderNavigation() {
  return (
    <nav>
      <Box bg="#E46D2A" w="100%" p={6} color="white">
        <HStack spacing={2}>
          <Link as={ReachLink} to="/">
            Home
          </Link>
          <Link as={ReachLink} to="/search">
            Search
          </Link>
          <Link as={ReachLink} to="/renter">
            For renters
          </Link>
          <Link as={ReachLink} to="/agent">
            For agents
          </Link>
          <Link as={ReachLink} to="/landlord">
            For landlords
          </Link>
        </HStack>
      </Box>
    </nav>
  );
}

export default HeaderNavigation;
