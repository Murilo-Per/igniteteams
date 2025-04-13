import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '@utils/AppError';

import { PlayerStorageDTO } from './PlayerStorageDTO';
import { PLAYER_COLLECTION } from '@storage/stotageConfig';

export async function playerGetByGroup(psGroupName: string) {
  try {

    const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${psGroupName}`);
    const players: PlayerStorageDTO[] = storage ? JSON.parse(storage) : [];

    return players;
  } catch (error) {
    throw error;
  }
}