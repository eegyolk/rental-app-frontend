import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

function SearchByAreaOrProperty() {
  return (
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
  );
}

export default SearchByAreaOrProperty;
