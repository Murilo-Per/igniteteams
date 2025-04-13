import AsyncStorage from '@react-native-async-storage/async-storage';

import { GROUP_COLLECTION } from '@storage/stotageConfig';
import { groupGetAll } from './groupsGetAll';
import { AppError } from '@utils/AppError';

export async function groupCreate(groupName: string) {
  const FsGroupExists = 'Uma turma com esse nome já está cadastrada!'

  try {
    const storedGroups = await groupGetAll();
    const bGroupExists = storedGroups.includes(groupName);

    if (bGroupExists) {
      throw new AppError(FsGroupExists);
    }

    const storage = JSON.stringify([...storedGroups, groupName])
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);

  } catch (error) {
    throw error;
  }
}