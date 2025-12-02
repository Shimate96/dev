import { useWindowDimensions } from 'react-native';

export const useResponsive = () => {
  const { width, height } = useWindowDimensions();
  
  return {
    isSmallScreen: width < 400,
    isMediumScreen: width >= 400 && width < 768,
    isLargeScreen: width >= 768,
    isPortrait: height > width,
    isLandscape: width > height,
    width,
    height,
  };
};
