import Header from '@components/Header';
import { Container, Form } from './styles';
import Highlight from '@components/Highlight';
import InputText from '@components/Input';
import ButtonAction from '@components/ButtonAction';
import Filter from '@components/Filter';
import { FlatList } from 'react-native';
import { useState } from 'react';


export default function Players() {
  const [teams, setTeams] = useState<string>('Time A');

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

    </Container>
  );
}