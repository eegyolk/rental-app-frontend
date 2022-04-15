import { Box, Button } from '@chakra-ui/react';

function SearchTags() {
  // TODO: Should
  const data = [
    'Quezon City',
    'Pasig City',
    'Makati City',
    'Taguig City',
    'Caloocan City',
    'Cebu City',
    'Mandaluyong City',
    'Antipolo City',
    'Tagaytay City',
    'Baguio City',
  ];

  return (
    <Box>
      {data.map((item, index) => {
        return (
          <Button
            key={index}
            _focus={{ boxShadow: 'none' }}
            _hover={{ boxShadow: 'none' }}
            _active={{ background: '#E46D2A', opacity: 0.6, color: 'white' }}
            borderRadius="10"
            fontWeight="light"
            mr={5}
            bg="whiteAlpha.600"
            color="#343844"
            h="40px"
          >
            {item.toLowerCase()}
          </Button>
        );
      })}
    </Box>
  );
}

export default SearchTags;
