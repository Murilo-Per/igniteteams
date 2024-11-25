import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components';
import { MaterialIcons, } from '@expo/vector-icons';

export type ButtonTypeProps = 'SUCCESS' | 'DELETE';

type Props = {
  type: ButtonTypeProps;
}

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;
  
  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'SUCCESS' ? theme.COLORS.GREEN_500 : theme.COLORS.RED_DARK,
}))`
`;