import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { Select } from '@chakra-ui/react';

function SearchByPropertyType() {
  const home = useSelector((state) => state.home);
  const { data } = useMemo(() => home.propertyTypes, [home.propertyTypes]);

  return (
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
  );
}

export default SearchByPropertyType;
