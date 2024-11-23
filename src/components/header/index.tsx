import { BackButton, BackIcon, Container, Logo, NavContainer, Subtitle, Title } from './styles';
import logoImg from '@assets/logo.png';

type Props = {
  title?: string;
  showBackButton?: boolean;
}

export default function Header({ title, showBackButton = false, ...props }: Props) {
  return (
    <Container>
      <NavContainer>
        {showBackButton &&
          <BackButton>
            <BackIcon />
          </BackButton>
        }
        <Logo source={logoImg} />
      </NavContainer>
      {
        (title !== undefined && !showBackButton) &&
        <>
          <Title>{title}</Title>
          <Subtitle>{title}</Subtitle>
        </>
      }

    </Container >
  );
};