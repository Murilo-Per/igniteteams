import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '@utils/AppError';

import { PlayerStorageDTO } from './PlayerStorageDTO';
import { PLAYER_COLLECTION } from '@storage/stotageConfig';
import { playerGetByGroup } from './playersGetByGroup';

export async function playersGetByGroupAndTeam(psGroupName: string, psTeam: string) {
  try {
    const storage = await playerGetByGroup(psGroupName);

    const players = storage.filter(player => player.team === psTeam);

    return players;
  } catch (error) {
    throw error;
  }
}