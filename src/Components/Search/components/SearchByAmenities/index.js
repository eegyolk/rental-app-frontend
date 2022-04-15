import { Box, Button } from '@chakra-ui/react';

function SearchByAmenities() {
  return (
    <Box w="40%" h="auto" bg="#343844" color="white" pl={10} pt={10} pb={5}>
      By amenities
      <Box pt={5}>
        <Button
          _focus={{ boxShadow: 'none' }}
          _hover={{ boxShadow: 'none' }}
          _active={{
            background: '#E46D2A',
            opacity: 0.6,
            color: 'white',
          }}
          borderRadius="10"
          fontWeight="light"
          mr={5}
          mb={3}
          bg="whiteAlpha.600"
          color="#343844"
          h="40px"
        >
          swimming pool
        </Button>
        <Button
          _focus={{ boxShadow: 'none' }}
          _hover={{ boxShadow: 'none' }}
          _active={{
            background: '#E46D2A',
            opacity: 0.6,
            color: 'white',
          }}
          borderRadius="10"
          fontWeight="light"
          mr={5}
          mb={3}
          bg="whiteAlpha.600"
          color="#343844"
          h="40px"
        >
          gym
        </Button>
        <Button
          _focus={{ boxShadow: 'none' }}
          _hover={{ boxShadow: 'none' }}
          _active={{
            background: '#E46D2A',
            opacity: 0.6,
            color: 'white',
          }}
          borderRadius="10"
          fontWeight="light"
          mr={5}
          mb={3}
          bg="whiteAlpha.600"
          color="#343844"
          h="40px"
        >
          gated community
        </Button>
        <Button
          _focus={{ boxShadow: 'none' }}
          _hover={{ boxShadow: 'none' }}
          _active={{
            background: '#E46D2A',
            opacity: 0.6,
            color: 'white',
          }}
          borderRadius="10"
          fontWeight="light"
          mr={5}
          mb={3}
          bg="whiteAlpha.600"
          color="#343844"
          h="40px"
        >
          24-hour securiy
        </Button>
        <Button
          _focus={{ boxShadow: 'none' }}
          _hover={{ boxShadow: 'none' }}
          _active={{
            background: '#E46D2A',
            opacity: 0.6,
            color: 'white',
          }}
          borderRadius="10"
          fontWeight="light"
          mr={5}
          mb={3}
          bg="whiteAlpha.600"
          color="#343844"
          h="40px"
        >
          spa
        </Button>
        <Button
          _focus={{ boxShadow: 'none' }}
          _hover={{ boxShadow: 'none' }}
          _active={{
            background: '#E46D2A',
            opacity: 0.6,
            color: 'white',
          }}
          border="1px solid white"
          borderRadius="10"
          fontWeight="light"
          mr={5}
          mb={3}
          bg="343844"
          color="#ffffff"
          h="40px"
        >
          more
        </Button>
      </Box>
    </Box>
  );
}

export default SearchByAmenities;
