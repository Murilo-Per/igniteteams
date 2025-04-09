import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Groups from '@screens/Groups';
import NewGroup from '@screens/NewGroup';
import Players from '@screens/Players';

const RootStack = createNativeStackNavigator({
  screenOptions: { headerShown: false },
  screens: {
    groups: Groups,
    newGroup: NewGroup,
    players: Players,
  }
});

const Navigation = createStaticNavigation(RootStack);

export function AppRoutes() {
  return <Navigation />;
}