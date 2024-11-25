import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export type ButtonTypeProps = 'SUCCESS' | 'DELETE';

type Props = {
  type: ButtonTypeProps;
}

export const Container = styled(TouchableOpacity) <Props>`
  min-height: 56px;
  max-height: 56px;

  max-width: 380px;

  border-radius: 8px;
  
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, type }) => type === 'SUCCESS' ? theme.COLORS.GREEN_500 : theme.COLORS.RED_DARK};
`;

export const Caption = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
`;