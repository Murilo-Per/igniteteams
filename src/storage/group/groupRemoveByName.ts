import AsyncStorage from '@react-native-async-storage/async-storage';

import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/stotageConfig';

import { groupGetAll } from './groupsGetAll';

export async function GroupRemoveByName(groupDelete: string) {
  try {
    const storedGroups = await groupGetAll();

    const storage = storedGroups.filter(group => group !== groupDelete);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(storage));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDelete}`);
  } catch (error) {
    throw error;
  }
}
