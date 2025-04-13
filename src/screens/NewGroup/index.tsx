import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/@types/navigation';

import { AppError } from '@utils/AppError';
import { groupCreate } from '@storage/group/groupCreate';

import Highlight from '@components/Highlight';
import { Container, Form, ImageIcon } from './styles';

import Header from '@components/Header';
import Button from '@components/Button';
import InputText from '@components/Input';
import { Alert } from 'react-native';

export default function NewGroup() {
  const [group, setGroup] = useState<string>('');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  async function handlerNewGroup() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert('Novo Grupo', 'Informe o nome do grupo!');
      }

      await groupCreate(group);
      navigation.navigate('players', { groupName: group });

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Grupo', error.FsMessage);
      } else {
        Alert.alert('Novo Grupo', 'Não foi possivel cadastrar um novo grupo!');
        console.log(error);
      }
    }
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