import AsyncStorage from '@react-native-async-storage/async-storage';

import { PLAYER_COLLECTION } from '@storage/stotageConfig';
import { playerGetByGroup } from './playersGetByGroup';

export async function playersRemoveByName(psPlayerName: string, psGroupName: string) {
  try {
    const storedPlayers = await playerGetByGroup(psGroupName);

    const filteredPlayers = storedPlayers.filter(player => player.name !== psPlayerName);

    const storage = JSON.stringify(filteredPlayers);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${psGroupName}`, storage);
  } catch (error) {
    throw error;
  }
}
