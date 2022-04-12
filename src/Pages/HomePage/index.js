import { Box } from '@chakra-ui/react';

import HomeHero from './components/HomeHero';
import HomeBenefits from './components/HomeBenefits';
import HomeAdvertisement from './components/HomeAdvertisement';
import HomeNewPropertyListing from './components/HomeNewPropertyListing';
import Banner from '../../Components/Banner';
import HomeFeatureOverview from './components/HomeFeatureOverview';

function HomePage() {
  return (
    <Box>
      <HomeHero />
      {/* <div>
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
      </div> */}
    </Box>
  );
}

export default HomePage;
