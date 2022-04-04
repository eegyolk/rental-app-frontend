import './style.css';
import Search from '../../Components/Search';
import HomeHero from './components/HomeHero';
import HomeBenefits from './components/HomeBenefits';
import HomeAdvertisement from './components/HomeAdvertisement';
import HomeNewPropertyListing from './components/HomeNewPropertyListing';
import Banner from '../../Components/Banner';
import HomeFeatureOverview from './components/HomeFeatureOverview';

function HomePage() {
  return (
    <div className="Home">
      <div>
        <Search />
        <br />
      </div>
      <div>
        <HomeHero />
        <br />
      </div>
      <div>
        <HomeBenefits />
        <br />
      </div>
      <div>
        <HomeAdvertisement />
        <br />
      </div>
      <div>
        <HomeNewPropertyListing />
        <br />
      </div>
      <div>
        <Banner />
        <br />
      </div>
      <div>
        <HomeFeatureOverview />
        <br />
      </div>
    </div>
  );
}

export default HomePage;
