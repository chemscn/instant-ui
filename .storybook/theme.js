import { create } from '@storybook/theming';
import Logo from './assets/instant-ui.png';


export default create({
  base: 'light',
  colorPrimary: '#00095B',

  // UI
  appBg: '#e7e4e4',
  appContentBg: 'white',
  appBorderColor: 'white',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.5)',

  // Toolbar default and active colors
  barTextColor: '#FFFFFF',
  barSelectedColor: '#FFFFFF',
  barBg: '#5a4ae3',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'My custom storybook',
  brandImage: Logo,
  brandTarget: '_self',
});
