import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/@types/navigation';
import { useNavigation } from '@react-navigation/native';
import { BackButton, BackIcon, Container, Logo } from './styles';
import logoImg from '@assets/logo.png';

type Props = {
  title?: string;
  showBackButton?: boolean;
}

export default function Header({ title, showBackButton = false, ...props }: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function handleScreenBack() {
    navigation.goBack();
  }

  return (
    <Container>
      {showBackButton &&
        <BackButton onPress={handleScreenBack}>
          <BackIcon />
        </BackButton>
      }
      <Logo source={logoImg} />
    </Container >
  );
};