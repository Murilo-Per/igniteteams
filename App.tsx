import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components';

import theme from '@themes/index';
import Groups from '@screens/Groups';
import Loading from '@components/Loading';
import NewGroup from '@screens/NewGroup';

export default function App() {
  const [fontLoaded, error] = useFonts({
    Roboto_400Regular, Roboto_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='default'
        backgroundColor='transparent'
        translucent
      />
      {fontLoaded ? <Groups /> : <Loading />}
      {/* {fontLoaded ? <NewGroup /> : <Loading />} */}
    </ThemeProvider>
  );
};

