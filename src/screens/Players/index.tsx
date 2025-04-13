import { useCallback, useEffect, useRef, useState } from 'react';
import { Alert, FlatList, TextInput } from 'react-native';
import { RootStackParamList } from 'src/@types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StaticScreenProps, useNavigation } from '@react-navigation/native';

import { Container, Form, FilterHeader } from './styles';
import { EmptyMessage } from '@utils/constants';

import { AppError } from '@utils/AppError';

import { PlayerStorageDTO } from '@storage/players/PlayerStorageDTO';
import { playerAddByGroup } from '@storage/players/playersAddByGroup';
import { playersRemoveByName } from '@storage/players/playersRemoveByName';
import { playersGetByGroupAndTeam } from '@storage/players/playersGetByGroupAndTeam';

import { GroupRemoveByName } from '@storage/group/groupRemoveByName';

import Header from '@components/Header';
import Filter from '@components/Filter';
import Highlight from '@components/Highlight';
import InputText from '@components/Input';
import EmptyList from '@components/EmptyList';
import PlayerCard from '@components/PlayerCard';
import ButtonAction from '@components/ButtonAction';
import Button from '@components/Button';
import Loading from '@components/Loading';

type Props = StaticScreenProps<{
  groupName: string;
}>

export default function Players({ route }: Props) {
  const [team, setTeam] = useState<string>('Time A');
  const [players, setplayers] = useState<PlayerStorageDTO[]>([]);
  const [newPlayerName, setNewPlayerName] = useState<string>('');
  const { groupName } = route.params;
  const newPlayerNameRef = useRef<TextInput>(null);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isLoading, setIsLoading] = useState(true);

  async function handlerAddNewPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert('Novo Player', 'Informe o nome do jogador!');
    }

    const newPlayer = {
      name: newPlayerName.trim(),
      team,
    }

    try {
      await playerAddByGroup(newPlayer, groupName);
      newPlayerNameRef.current?.blur();
      setNewPlayerName('');
      fetchPlayerByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Player', error.FsMessage);
      } else {
        Alert.alert('Novo Player', 'Não foi possível adicionar jogador!');
      }
    }
  }

  async function fetchPlayerByTeam() {
    try {
      setIsLoading(true);
      const playersByTeam = await playersGetByGroupAndTeam(groupName, team);
      setplayers(playersByTeam);
    } catch (error) {
      return Alert.alert('Pessoa', 'Não foi possível listar pessoas da turma!');
    } finally {
      setIsLoading(false);
    }
  }

  async function handlerPlayerRemove(psPlayerName: string) {
    try {
      await playersRemoveByName(psPlayerName, groupName);
      fetchPlayerByTeam();

    } catch (error) {
      console.log(error);
      return Alert.alert('Pessoa', 'Não foi possível remover essa pessoa!');
    }
  }

  async function GroupRemove() {
    try {
      await GroupRemoveByName(groupName);
      navigation.navigate('groups');
    } catch (error) {
      console.log(error);
      return Alert.alert('Remover', 'Não foi possível remover a turma selecionada!')
    }
  }

  async function handlerGroupRemove() {
    Alert.alert(
      'Remover turma',
      'Deseja remover a turma?',
      [
        { text: 'Não', style: 'cancel' },
        { text: 'Sim', onPress: () => GroupRemove() },
      ]
    )
  }

  useEffect(() => {
    fetchPlayerByTeam();
  }, [team]);

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title={groupName}
        subTitle="adicione a galera e separe os times"
      />
      <Form>
        <InputText
          inputRef={newPlayerNameRef}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          placeholder="Nome do participante"
          autoCorrect={false}
          onSubmitEditing={handlerAddNewPlayer}
          returnKeyType="done"
        />
        <ButtonAction
          icon="add"
          onPress={handlerAddNewPlayer}
        />
      </Form>

      <FilterHeader>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              caption={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
      </FilterHeader>

      {
        isLoading ? <Loading /> :
          <FlatList
            data={players}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <PlayerCard
                name={item.name}
                onRemove={() => handlerPlayerRemove(item.name)}
              />
            )}
            ListEmptyComponent={() => (
              <EmptyList
                text={EmptyMessage}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
              { paddingBottom: 100 },
              players.length === 0 && { flex: 1 }
            ]}
          />
      }
      <Button
        caption='Remover turma'
        buttonType='DELETE'
        onPress={handlerGroupRemove}
      />
    </Container>
  );
}