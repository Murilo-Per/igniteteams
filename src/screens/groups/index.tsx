import Header from '@components/Header';
import * as Mcomp from './styles';
import { Highlight } from '@components/Highlight';

export default function Groups() {
  return (
    <Mcomp.Container>
      <Header />
      <Highlight title='Turmas' subTitle='Reuna os amigos para começar a diversão!' />
    </Mcomp.Container>
  );
}