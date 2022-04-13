import axios from 'axios';

import { GRAPHQL_BASE_URL } from '../config';

export default axios.create({
  baseURL: GRAPHQL_BASE_URL,
});
