import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Container, ButtonTypeProps, Icon } from './styles';

type Props = TouchableOpacityProps & {
  buttonType?: ButtonTypeProps;
  icon: keyof typeof MaterialIcons.glyphMap;
}

export default function ButtonAction({ icon, buttonType = 'SUCCESS', ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon
        type={buttonType}
        name={icon}
      />
    </Container>
  );
}