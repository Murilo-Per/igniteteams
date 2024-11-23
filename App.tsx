import { StatusBar } from 'expo-status-bar';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components';

import theme from '@themes/index';
import Groups from '@screens/groups';
import Loading from '@components/loading';

export default function App() {
  const [fontLoaded, error] = useFonts({
    Roboto_400Regular, Roboto_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      {fontLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
};

