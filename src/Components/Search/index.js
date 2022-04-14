import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import {
  Box,
  HStack,
  InputGroup,
  InputLeftElement,
  Input,
  Select,
  Button,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { BsSliders } from 'react-icons/bs';

function Search() {
  const home = useSelector((state) => state.home);
  const { data } = useMemo(() => home.propertyTypes, [home.propertyTypes]);

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
      <HStack>
        <InputGroup>
          <InputLeftElement
            pl="30px"
            position="inherit"
            pointerEvents="none"
            children={<SearchIcon color="black" />}
          />
          <Input
            _focus={{ boxShadow: 'none' }}
            border="0"
            placeholder="Search an area or property name"
            color="black"
          />
        </InputGroup>
        <Select
          _focus={{ boxShadow: 'none' }}
          border="0"
          borderLeft="1px"
          borderLeftColor="#C1C1C1"
          borderRadius={0}
          color="#343844"
          h="50px"
          w={300}
          textAlign="center"
          defaultValue="1"
        >
          {data &&
            data.map((item, index) => {
              return (
                <option key={index} value={item.id}>
                  {item.label}
                </option>
              );
            })}
        </Select>
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
      </HStack>
    </Box>
  );
}

export default Search;
