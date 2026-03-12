import { useSelector } from 'react-redux';
import { lightColors,darkColors } from './Colors';

export const useColors = () => {
  // const isDark = lightColors;
  // return isDark ? darkColors : lightColors;
  return lightColors;
};
