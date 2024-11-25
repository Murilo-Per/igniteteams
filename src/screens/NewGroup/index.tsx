import Highlight from '@components/Highlight';
import { Container, Form, ImageIcon, InputNomeTurma } from './styles';

import Header from '@components/Header';
import Button from '@components/Button';
import InputText from '@components/Input';

export default function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Form>
        <ImageIcon />

        <Highlight
          title="Nova Turma"
          subTitle="crie uma turma para adicionar pessoa"
        />

        <InputText placeholder="Nome da turma" />

        <Button caption="Criar" />
      </Form>
    </Container>
  );
}