import { useCallback, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { RootStackParamList } from 'src/@types/navigation';

import { Container } from './styles';
import { EmptyMessage } from '@utils/constants';
import { groupGetAll } from '@storage/group/groupsGetAll';

import Highlight from '@components/Highlight';
import GroupCard from '@components/GroupCard';
import Header from '@components/Header';
import EmptyList from '@components/EmptyList';
import Button from '@components/Button';
import Loading from '@components/Loading';


export default function Groups() {
  const [groups, setGroups] = useState<string[]>(['Trabalho']);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isLoading, setIsLoading] = useState(true);

  function handleSelectGroup(pGroupName: string) {
    navigation.navigate('players', { groupName: pGroupName });
  }

  function handleNewGroup() {
    navigation.navigate('newGroup');
  }

  async function fetchGroups() {
    try {
      setIsLoading(true);
      const data = await groupGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []));

  return (
    <Container>
      <Header />

      <Highlight
        title="Turmas"
        subTitle="Reuna os amigos para começar a diversão!"
      />
      {isLoading ? <Loading /> :
        <FlatList
          data={groups}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <GroupCard
              caption={item}
              onPress={() => {
                handleSelectGroup(item)
              }}
            />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => (
            <EmptyList
              text={EmptyMessage}
            />
          )}
        />
      }
      <Button
        caption="Criar nova turma"
        onPress={handleNewGroup}
      />

    </Container>
  );
}