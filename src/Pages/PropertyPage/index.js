import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import {
  queryAnnouncement,
  queryPropertyTypes,
} from '../HomePage/reducer/actionTypes';

import Search from '../../Components/Search';
import PropertyImages from './components/PropertyImages';
import PropertyMenu from './components/PropertyMenu';
import PropertyInfo from './components/PropertyInfo';
import PropertyFeaturesAmenities from './components/PropertyFeaturesAmenities';

function PropertyPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(queryAnnouncement());
    dispatch(queryPropertyTypes());
  }, []);

  return (
    <div className="PropertyPage">
      <header className="PropertyPage-header">PropertyPage</header>
      <p>This is my property page.</p>
      <div>
        <Search />
      </div>
      <div>
        <PropertyImages />
      </div>
      <div>
        <PropertyMenu />
      </div>
      <div>
        <PropertyInfo />
      </div>
      <div>
        <PropertyFeaturesAmenities />
      </div>
    </div>
  );
}

export default PropertyPage;
