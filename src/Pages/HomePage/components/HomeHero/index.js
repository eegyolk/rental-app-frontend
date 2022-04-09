import { useState, useEffect, useMemo } from 'react';
import { Box } from '@chakra-ui/react';

import hero1 from '../../../../assets/images/hero-1.jpeg';
import hero2 from '../../../../assets/images/hero-2.jpeg';
import hero3 from '../../../../assets/images/hero-3.jpeg';
import hero4 from '../../../../assets/images/hero-4.jpeg';

import Search from '../../../../Components/Search';
import HeroImage from './components/HeroImage';

function HomeHero() {
  const images = useMemo(() => [hero1, hero2, hero3, hero4], []);

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (imageIndex >= images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex((imageIndex) => imageIndex + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [imageIndex, images]);

  const handleSelectImage = (index) => {
    setImageIndex(index);
  };

  return (
    <Box
      bg="#000000"
      w="100%"
      h={600}
      p={3}
      color="white"
      backgroundImage={images[imageIndex]}
      backgroundSize="100% 100%"
      position="relative"
    >
      <Search />
      <Box position="absolute" bottom={10} right={10}>
        {images.map((item, index) => {
          return (
            <HeroImage
              key={index}
              assignedIndex={index}
              currentIndex={imageIndex}
              selectImage={handleSelectImage}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default HomeHero;
