import { TouchableOpacityProps } from 'react-native';
import { Container, Caption, FilterStylesProps } from './styles';


type Props = FilterStylesProps & TouchableOpacityProps & {
  isActive?: boolean;
  caption: string;
}

export default function Filter({ isActive = false, caption, ...rest }: Props) {
  return (
    <Container isActive={isActive} {...rest}>
      <Caption>{caption}</Caption>
    </Container>
  );
}