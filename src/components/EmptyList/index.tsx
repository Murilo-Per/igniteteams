import { Container, Message } from './styles';

type Props = {
  text: string;
}

export default function EmptyList({ text }: Props) {
  return (
    <Container >
      <Message>
        {text}
      </Message>
    </Container>
  );
}