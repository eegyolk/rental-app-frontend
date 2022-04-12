import { Box, HStack, Text } from '@chakra-ui/react';

function HeaderAnnouncement() {
  return (
    <Box bg="#E1E1E1" w="100%" p={3} color="black">
      <HStack spacing={2}>
        <Text fontSize="md" fontWeight="semibold">
          COVID-19 INFORMATION /{' '}
        </Text>
        <Text fontSize="sm" fontWeight="light">
          For the latest updates, please visit our coronavirs (COVID-19) website
        </Text>
      </HStack>
    </Box>
  );
}

export default HeaderAnnouncement;
