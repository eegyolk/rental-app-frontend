import { Box, HStack, Image } from '@chakra-ui/react';

import filterSwimmingPool from '../../../../assets/images/filter-swimming-pool.png';

function SearchByPreferences() {
  return (
    <Box w="25%" h={200} bg="#343844" color="white" pl={10} pt={10}>
      Most preferred by renters
      <HStack spacing={3} pt={5}>
        <Image h={20} src={filterSwimmingPool} alt="Swimming Pool" />
        <Image h={20} src={filterSwimmingPool} alt="Bedroom" />
        <Image h={20} src={filterSwimmingPool} alt="Wifi" />
      </HStack>
    </Box>
  );
}

export default SearchByPreferences;
