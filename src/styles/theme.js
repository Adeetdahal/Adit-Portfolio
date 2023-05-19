import { ThemeProvider } from 'styled-components';

import theme from "../themes/default";
import GlobalStyles from './globals';
import ParticleComponent from '../../utils/Particles/ParticleComponent';

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <ParticleComponent />
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;