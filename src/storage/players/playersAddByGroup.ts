import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '@utils/AppError';

import { PlayerStorageDTO } from './PlayerStorageDTO';
import { PLAYER_COLLECTION } from '@storage/stotageConfig';
import { playerGetByGroup } from './playersGetByGroup';

export async function playerAddByGroup(poPlayer: PlayerStorageDTO, psGroupName: string) {
  try {
    const storedPlayers = await playerGetByGroup(psGroupName);

    const oPlayerExists = storedPlayers.filter(player => player.name === poPlayer.name);

    if (oPlayerExists.length > 0) {
      throw new AppError('Essa pessoa já esta cadastrada na turma!');
    }

    const storage = JSON.stringify([...storedPlayers, poPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${psGroupName}`, storage);
  } catch (error) {
    throw error;
  }
}