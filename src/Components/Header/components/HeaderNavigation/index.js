import { Box, Spacer, HStack, Link, Image, Text } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

import logoHeader from '../../../../assets/images/logo-header.png';

function HeaderNavigation() {
  return (
    <nav>
      <Box bg="#E46D2A" w="100%" p={5} color="white" display="flex">
        <HStack spacing={10}>
          <Box w={5}></Box>
          <Link as={ReachLink} to="/">
            <Image src={logoHeader} alt="Balai Header Logo" />
          </Link>
          <Link as={ReachLink} to="/search">
            <Text fontWeight="bold">Search</Text>
          </Link>
          <Link as={ReachLink} to="/renter">
            <Text fontWeight="bold">For renters</Text>
          </Link>
          <Link as={ReachLink} to="/agent">
            <Text fontWeight="bold">For agents</Text>
          </Link>
          <Link as={ReachLink} to="/landlord">
            <Text fontWeight="bold">For landlords</Text>
          </Link>
        </HStack>
        <Spacer />
        <HStack spacing={10}>
          <Link as={ReachLink} to="/signin">
            <Text fontWeight="bold">Sign In</Text>
          </Link>
          <Link
            as={ReachLink}
            to="/list-property"
            border="1px"
            borderRadius={5}
            borderStyle="solid"
            p={3}
          >
            <Text fontWeight="bold">List property</Text>
          </Link>
          <Box w={5}></Box>
        </HStack>
      </Box>
    </nav>
  );
}

export default HeaderNavigation;
