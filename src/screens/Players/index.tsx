import { useState } from 'react';
import { FlatList } from 'react-native';

import { Container, Form, FilterHeader } from './styles';

import Header from '@components/Header';
import Filter from '@components/Filter';
import Highlight from '@components/Highlight';
import InputText from '@components/Input';
import EmptyList from '@components/EmptyList';
import PlayerCard from '@components/PlayerCard';
import ButtonAction from '@components/ButtonAction';
import { EmptyMessage } from '@utils/constants';
import Button from '@components/Button';


export default function Players() {
  const [teams, setTeams] = useState<string>('Time A');
  const [players, setplayers] = useState<string[]>([]);

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da Turma"
        subTitle="adicione a galera e separe os times"
      />
      <Form>
        <InputText
          placeholder="Nome do participante"
          autoCorrect={false}
        />
        <ButtonAction icon="add" />
      </Form>

      <FilterHeader>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              caption={item}
              isActive={item === teams}
              onPress={() => setTeams(item)}
            />
          )}
          horizontal
        />
      </FilterHeader>

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard
            name={item}
            onRemove={() => { }}
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

      <Button
        caption='Remover turma'
        buttonType='DELETE'
      />
    </Container>
  );
}