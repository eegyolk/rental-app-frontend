import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

function SearchByAreaOrProperty(props) {
  const { isHome } = props;

  return (
    <InputGroup>
      <InputLeftElement
        pl={isHome ? '30px' : '50px'}
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

SearchByAreaOrProperty.defaultProps = {
  isHome: true,
};

SearchByAreaOrProperty.propTypes = {
  isHome: PropTypes.bool,
};

export default SearchByAreaOrProperty;
