import { useState } from 'react';
import { FlatList } from 'react-native';

import { Container } from './styles';
import { EmptyMessage } from '@utils/constants';

import Highlight from '@components/Highlight';
import GroupCard from '@components/GroupCard';
import Header from '@components/Header';
import EmptyList from '@components/EmptyList';
import Button from '@components/Button';


export default function Groups() {
  const [groups, setGroups] = useState<string[]>(['Trabalho']);

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
      <Button caption="Criar nova turma" />

    </Container>
  );
}