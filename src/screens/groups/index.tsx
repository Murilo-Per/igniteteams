import { useState } from 'react';
import { FlatList } from 'react-native';

import { Container } from './styles';

import Highlight from '@components/Highlight';
import GroupCard from '@components/GroupCard';
import Header from '@components/Header';


export default function Groups() {
  const [groups, setGroups] = useState<string[]>(['Amigos Facul', 'Familia', 'Trabalho']);

  return (
    <Container>
      <Header />

      <Highlight
        title='Turmas'
        subTitle='Reuna os amigos para começar a diversão!'
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            caption={item}
          />
        )}
      />

    </Container>
  );
}