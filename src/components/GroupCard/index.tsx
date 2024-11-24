import { TouchableOpacityProps } from 'react-native';
import { Container, Caption, UserTreeIcon } from './styles';

type Props = TouchableOpacityProps & {
  caption: string;
}

export default function GroupCard({ caption, ...rest }: Props) {

  return (
    <Container {...rest}>
      <UserTreeIcon />
      <Caption>
        {caption}
      </Caption>
    </Container>
  );
}