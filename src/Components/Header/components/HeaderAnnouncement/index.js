import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';

function HeaderAnnouncement() {
  const home = useSelector((state) => state.home);
  const { data } = useMemo(() => home.announcement, [home.announcement]);

  return (
    data && (
      <Box bg="#E1E1E1" w="100%" p={3} color="black">
        <HStack spacing={2}>
          <Text fontSize="md" fontWeight="semibold">
            {data.title} /{' '}
          </Text>
          <Text fontSize="sm" fontWeight="light">
            {data.description}
          </Text>
        </HStack>
      </Box>
    )
  );
}

export default HeaderAnnouncement;
