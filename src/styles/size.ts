import {Dimensions} from 'react-native';
import {checkPlatform} from '../util';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const guidelineBaseWidth = 390;

const scaleSize = (size: number) => (WINDOW_WIDTH / guidelineBaseWidth) * size;

const NUM_WORM = 12;

const HEIGHT_BOARD = scaleSize(
  WINDOW_HEIGHT - 32 - 60 - checkPlatform<number>(24, 60),
);
const WIDTH_BOARD = scaleSize(WINDOW_WIDTH - 24);

export const Size = {
  ASPECT_RATIO: WINDOW_WIDTH / WINDOW_HEIGHT,
  WINDOW_WIDTH: WINDOW_WIDTH,
  WINDOW_HEIGHT: WINDOW_HEIGHT,
  WORM_SIZE: WIDTH_BOARD / NUM_WORM,
  HEIGHT_BOARD: HEIGHT_BOARD,
  WIDTH_BOARD: WIDTH_BOARD,
  borderRadius5: 5,
  borderRadius8: 8,
  borderRadius10: 10,
  borderRadius12: 12,
  borderRadius15: 15,
  borderRadius50: 50,
  borderRadius100: 100,
  height_header_android: scaleSize(56),
  height_header_ios: scaleSize(44),
  size1: scaleSize(1),
  size2: scaleSize(2),
  size4: scaleSize(4),
  size6: scaleSize(6),
  size5: scaleSize(5),
  size8: scaleSize(8),
  size10: scaleSize(10),
  size12: scaleSize(12),
  size14: scaleSize(14),
  size16: scaleSize(16),
  size18: scaleSize(18),
  size20: scaleSize(20),
  size22: scaleSize(22),
  size24: scaleSize(24),
  size26: scaleSize(26),
  size28: scaleSize(28),
  size30: scaleSize(30),
  size32: scaleSize(32),
  size34: scaleSize(34),
  size36: scaleSize(36),
  size38: scaleSize(38),
  size40: scaleSize(40),
  size42: scaleSize(42),
  size44: scaleSize(44),
  size46: scaleSize(46),
  size48: scaleSize(48),
  size50: scaleSize(50),
  size56: scaleSize(56),
  size60: scaleSize(60),
  size64: scaleSize(64),
  size80: scaleSize(80),
  size100: scaleSize(100),
  size150: scaleSize(150),
  size200: scaleSize(200),
  size250: scaleSize(250),
  size300: scaleSize(300),
};
