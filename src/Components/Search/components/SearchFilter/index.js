import { Button } from '@chakra-ui/react';
import { BsSliders } from 'react-icons/bs';
import PropTypes from 'prop-types';

function SearchFilter(props) {
  const { isHome } = props;

  return (
    <Button
      _focus={{ boxShadow: 'none' }}
      _hover={{ boxShadow: 'none' }}
      _active={
        isHome
          ? { background: '#E46D2A', opacity: 0.6 }
          : { background: '343844' }
      }
      borderLeftRadius="0"
      borderRightRadius={isHome ? 'default' : '0'}
      leftIcon={<BsSliders />}
      bg="#343844"
      color="white"
      h="50px"
      w="200px"
    >
      Filter
    </Button>
  );
}

SearchFilter.defaultProps = {
  isHome: true,
};

SearchFilter.propTypes = {
  isHome: PropTypes.bool,
};

export default SearchFilter;
