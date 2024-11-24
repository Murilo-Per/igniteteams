import { Container, Title, Subtitle } from './styles';

type Props = {
  title: string;
  subTitle: string;
}

export default function Highlight({ title, subTitle }: Props) {

  return (
    <Container>
      <Title>
        {title}
      </Title>
      <Subtitle>
        {subTitle}
      </Subtitle>
    </Container>
  );
}


