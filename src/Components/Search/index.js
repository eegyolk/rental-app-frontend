import { Box, HStack, VStack } from '@chakra-ui/react';

import SearchByAreaOrProperty from './components/SearchByAreaOrProperty';
import SearchByPropertyType from './components/SearchByPropertyType';
import SearchFilter from './components/SearchFilter';
import SearchTags from './components/SearchTags';

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
      <VStack spacing={4} align="stretch">
        <HStack>
          <SearchByAreaOrProperty />
          <SearchByPropertyType />
          <SearchFilter />
        </HStack>
        <HStack>
          <SearchTags />
        </HStack>
      </VStack>
    </Box>
  );
}

export default Search;
