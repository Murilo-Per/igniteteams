import { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { RootStackParamList } from 'src/@types/navigation';

import { Container } from './styles';
import { EmptyMessage } from '@utils/constants';

import Highlight from '@components/Highlight';
import GroupCard from '@components/GroupCard';
import Header from '@components/Header';
import EmptyList from '@components/EmptyList';
import Button from '@components/Button';


export default function Groups() {
  const [groups, setGroups] = useState<string[]>(['Trabalho']);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function handleNewGroup() {
    navigation.push('newGroup');
  }

  return (
    <Container>
      <Header />

      <Highlight
        title="Turmas"
        subTitle="Reuna os amigos para começar a diversão!"
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            caption={item}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <EmptyList
            text={EmptyMessage}
          />
        )}
      />
      <Button
        caption="Criar nova turma"
        onPress={handleNewGroup}
      />

    </Container>
  );
}