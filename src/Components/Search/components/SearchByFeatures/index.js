import { Box, Button } from '@chakra-ui/react';

function SearchByFeatures() {
  return (
    <Box w="35%" h={200} bg="#343844" color="white" pl={10} pt={10}>
      By features
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
          car park
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
          pet friendy
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
          smart house
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
          cctv
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
          bathtub
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

export default SearchByFeatures;
