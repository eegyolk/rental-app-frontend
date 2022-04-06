import { Box, HStack, Text } from '@chakra-ui/react';

function HeaderAnnouncement() {
  return (
    <Box bg="#E1E1E1" w="100%" p={3} color="black">
      <HStack spacing={2}>
        <Text fontSize="md">COVID-19 INFORMATION / </Text>
        <Text fontSize="sm">
          For the latest updates, please visi our coronavirs (COVID-19) website
        </Text>
      </HStack>
    </Box>
  );
}

export default HeaderAnnouncement;
