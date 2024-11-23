import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import theme from './src/themes';

import Groups from '@screens/groups';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      <Groups />
    </ThemeProvider>
  );
};

