import ButtonAction from '@components/ButtonAction';
import { Container, NamePlayer, IconPlayer } from './styles';

type Props = {
  name: string;
  onRemove: () => void;
};

export default function PlayerCard({ name, onRemove }: Props) {
  return (
    <Container>
      <IconPlayer name='person' />

      <NamePlayer>
        {name}
      </NamePlayer>

      <ButtonAction
        icon='remove'
        buttonType='DELETE'
        onPress={onRemove}
      />
    </Container>
  );
};