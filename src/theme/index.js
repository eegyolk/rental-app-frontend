import { extendTheme } from '@chakra-ui/react';

import * as components from './components';
import foundations from './foundations';
import styles from './styles';

const overrides = {
  components,
  ...foundations,
  styles,
};

export default extendTheme(overrides);
