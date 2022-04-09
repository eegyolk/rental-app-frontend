import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function HeroImage(props) {
  const { assignedIndex, currentIndex, selectImage } = props;
  let currentImageColor = '#E46D2A';

  if (currentIndex !== assignedIndex) {
    currentImageColor = 'whiteAlpha.700';
  }

  const handleOnClick = () => {
    currentIndex !== assignedIndex && selectImage(assignedIndex);
  };

  return (
    <Icon
      viewBox="0 0 200 200"
      color={currentImageColor}
      cursor="pointer"
      onClick={() => handleOnClick()}
    >
      <path
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  );
}

HeroImage.propTypes = {
  assignedIndex: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
  selectImage: PropTypes.func.isRequired,
};

export default HeroImage;
