// Assets
import { logoMBDark, logoMBLight } from '@/assets';
// Constants
import { SupportedPages } from '@/constants';

const BRANDING = {
  logo: {
    light: logoMBLight,
    dark: logoMBDark,
  },
};
const MENU = [
  { value: 'Home', redirect: SupportedPages.Home },
  { value: 'Components', redirect: SupportedPages.Components },
  { value: 'FA Icons', redirect: SupportedPages.FAIcons },
  { value: 'Axios + SWR', redirect: SupportedPages.AxiosAndSWR },
];

const BASIC_COLORS = {
  white: {
    main: '#ffffff',
  },
  black: {
    main: '#0b0c18',
  },
  gray: {
    main: '#6b7688',
  },
};

const FONT_SIZES = {
  sm: '12px',
  md: '14px',
  lg: '18px',
  xl: '24px',
  xxl: '30px',
};

const LINE_HEIGHTS = {
  sm: '20px',
  md: '22px',
  lg: '26px',
  xl: '32px',
  xxl: '38px',
};

const FONT_WEIGHTS = {
  low: 400,
  medium: 700,
  high: 1000,
};

const BOX_SHADOWS = {
  low: '0 2px 4px rgba(0, 0, 0, 0.2)',
  medium: '0 4px 6px rgba(0, 0, 0, 0.3)',
  high: '0 8px 10px rgba(0, 0, 0, 0.4)',
};

const BASIC_PROPS = {
  fontSize: FONT_SIZES,
  lineHeight: LINE_HEIGHTS,
  fontWeight: FONT_WEIGHTS,
  boxShadow: BOX_SHADOWS,
};

export default {
  branding: BRANDING,
  menu: MENU,
  theme: {
    fontSize: FONT_SIZES,
    lineHeight: LINE_HEIGHTS,
    fontWeight: FONT_WEIGHTS,
    boxShadow: BOX_SHADOWS,
    light: {
      ...BASIC_PROPS,
      palette: {
        ...BASIC_COLORS,
        primary: {
          main: '#5c6bc0',
        },
        default: {
          main: '#030303',
          background1: '#edf2f8',
          background2: '#ffffff',
        },
        elements: {
          header: {
            main: 'hsla(0,0%,100%,.25)',
            border: 'hsla(0,0%,100%,.18)',
          },
        },
      },
    },
    dark: {
      ...BASIC_PROPS,
      palette: {
        ...BASIC_COLORS,
        primary: {
          main: '#3949ab',
        },
        default: {
          main: '#edf2f8',
          background1: '#191624',
          background2: '#0b0c18',
        },
        elements: {
          header: {
            main: 'rgba(0, 0, 0, 0.25)',
            border: 'hsla(0, 0%, 5%, 0.18)',
          },
        },
      },
    },
  },
};
