import { Box, HStack } from '@chakra-ui/react';

import SearchByAreaOrProperty from './components/SearchByAreaOrProperty';
import SearchByPropertyType from './components/SearchByPropertyType';
import SearchFilter from './components/SearchFilter';

function Search() {
  return (
    <Box
      bg="whiteAlpha.900"
      h="50px"
      m="40px"
      color="white"
      backgroundSize="100% 100%"
      position="relative"
      borderRadius={5}
      display="block"
    >
      <HStack>
        <SearchByAreaOrProperty />
        <SearchByPropertyType />
        <SearchFilter />
      </HStack>
    </Box>
  );
}

export default Search;
