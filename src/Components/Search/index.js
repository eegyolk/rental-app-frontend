import { Box, HStack, VStack } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import SearchByAreaOrProperty from './components/SearchByAreaOrProperty';
import SearchByPropertyType from './components/SearchByPropertyType';
import SearchFilter from './components/SearchFilter';
import SearchTags from './components/SearchTags';
import SearchByPreferences from './components/SearchByPreferences';
import SearchByFeatures from './components/SearchByFeatures';
import SearchByAmenities from './components/SearchByAmenities';

function Search(props) {
  const { isHome } = props;

  return (
    <Box>
      {(isHome && (
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
      )) || (
        <Box
          bg="whiteAlpha.900"
          h="50px"
          color="white"
          backgroundSize="100% 100%"
          position="relative"
          display="block"
        >
          <VStack spacing={0} align="stretch">
            <HStack>
              <SearchByAreaOrProperty isHome={isHome} />
              <SearchByPropertyType />
              <SearchFilter isHome={isHome} />
            </HStack>
            <Box spacing={0} overflow="auto" textAlign="justify" display="flex">
              <SearchByPreferences />
              <SearchByFeatures />
              <SearchByAmenities />
            </Box>
          </VStack>
        </Box>
      )}
    </Box>
  );
}

Search.defaultProps = {
  isHome: true,
};

Search.propTypes = {
  isHome: PropTypes.bool,
};

export default Search;
