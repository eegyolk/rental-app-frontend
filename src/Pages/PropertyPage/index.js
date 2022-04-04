import './style.css';
import Search from '../../Components/Search';
import PropertyImages from './components/PropertyImages';
import PropertyMenu from './components/PropertyMenu';
import PropertyInfo from './components/PropertyInfo';
import PropertyFeaturesAmenities from './components/PropertyFeaturesAmenities';

function PropertyPage() {
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
