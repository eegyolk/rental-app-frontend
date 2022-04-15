import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import {
  queryAnnouncement,
  queryPropertyTypes,
} from '../HomePage/reducer/actionTypes';

import Search from '../../Components/Search';
import SearchMap from './components/SearchMap';
import SearchResult from './components/SearchResult';
import SearchComparison from './components/SearchComparison';

function SearchPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(queryAnnouncement());
    dispatch(queryPropertyTypes());
  });

  return (
    <div className="SearchPage">
      <div>
        <Search isHome={false} />
      </div>
      <div>
        <SearchMap />
      </div>
      <div>
        <SearchResult />
      </div>
      <div>
        <SearchComparison />
      </div>
    </div>
  );
}

export default SearchPage;
