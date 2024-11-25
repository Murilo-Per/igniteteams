import { TouchableOpacityProps } from 'react-native';
import { Container, Caption, ButtonTypeProps } from './styles';

type Props = TouchableOpacityProps & {
  caption: string;
  buttonType?: ButtonTypeProps
}

export default function Button({ caption, buttonType = 'SUCCESS', ...rest }: Props) {
  return (
    <Container type={buttonType} {...rest}>
      <Caption>
        {caption}
      </Caption>
    </Container>
  );
}