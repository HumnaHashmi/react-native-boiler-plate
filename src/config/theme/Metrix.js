// src/config/theme/Metrix.js
import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

const isIphoneX = () => {
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTV &&
    (SCREEN_HEIGHT >= 812 || SCREEN_WIDTH >= 812)
  );
};

// Safe area adjustment
const getAdjustedHeight = () => {
  let height = SCREEN_HEIGHT;
  height -= Platform.OS === 'ios' ? (isIphoneX() ? 44 : 20) : 24;
  return height;
};

const scale = getAdjustedHeight() / BASE_HEIGHT;

const normalize = size => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const VerticalSize = size => (size / BASE_HEIGHT) * getAdjustedHeight();
const HorizontalSize = size => (size / BASE_WIDTH) * SCREEN_WIDTH;

const Metrix = {
  Radius: VerticalSize(20),
  LightRadius: VerticalSize(6),
  ActiveOpacity: 0.7,

  customFontSize: normalize,

  FontExtraSmall: normalize(12),
  FontSmall: normalize(14),
  FontRegular: normalize(16),
  FontMedium: normalize(18),
  FontLarge: normalize(22),
  FontExtraLarge: normalize(24),

  VerticalSize,
  HorizontalSize,
};

export default Metrix;
