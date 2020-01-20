import { TypographyOptions } from 'typography';

const systemFonts = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
];

const theme: TypographyOptions = {
  baseFontSize: '16px',
  baseLineHeight: 1.625,
  headerFontFamily: systemFonts,
  bodyFontFamily: systemFonts,
  scaleRatio: 2,
  bodyColor: 'rgba(0, 0, 0, 0.87)',
  headerWeight: 400,
  headerColor: 'rgba(0, 0, 0, 0.87)',
  bodyWeight: 400,
  boldWeight: 600,
  blockMarginBottom: 1,
  overrideStyles: () => ({
    'b,strong': {
      color: 'rgba(0, 0, 0, 0.87)',
    },
    a: {
      textDecoration: 'none',
    },
    'a:hover,a:active': {
      textDecoration: 'underline',
    },
  }),
};

export default theme;
