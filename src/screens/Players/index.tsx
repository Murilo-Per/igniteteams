import Header from '@components/Header';
import { Container, Form } from './styles';
import Highlight from '@components/Highlight';
import InputText from '@components/Input';
import ButtonAction from '@components/ButtonAction';


export default function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da Turma!"
        subTitle="adicione a galera e separe os times"
      />
      <Form>
        <InputText
          placeholder="Nome do participante"
          autoCorrect={false}
        />
        <ButtonAction icon="add" />
      </Form>


    </Container>
  );
}