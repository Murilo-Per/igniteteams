import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/@types/navigation';

import Highlight from '@components/Highlight';
import { Container, Form, ImageIcon } from './styles';

import Header from '@components/Header';
import Button from '@components/Button';
import InputText from '@components/Input';

export default function NewGroup() {
  const [group, setGroup] = useState<string>('');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function handlerNewGroup() {
    navigation.navigate('players', { groupName: group })
  }

  return (
    <Container>
      <Header showBackButton />
      <Form>
        <ImageIcon />
        <Highlight
          title="Nova Turma"
          subTitle="crie uma turma para adicionar pessoa"
        />

        <InputText
          placeholder="Nome da turma"
          onChangeText={setGroup}
        />

        <Button
          caption="Criar"
          onPress={handlerNewGroup}
        />
      </Form>
    </Container>
  );
}