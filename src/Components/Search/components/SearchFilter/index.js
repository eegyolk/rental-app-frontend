import { Button } from '@chakra-ui/react';
import { BsSliders } from 'react-icons/bs';

function SearchFilter() {
  return (
    <Button
      _focus={{ boxShadow: 'none' }}
      _hover={{ boxShadow: 'none' }}
      _active={{ background: '#E46D2A' }}
      borderLeftRadius="0"
      leftIcon={<BsSliders />}
      colorScheme="blue"
      bg="#343844"
      color="white"
      h="50px"
      w="200px"
    >
      Filter
    </Button>
  );
}

export default SearchFilter;
