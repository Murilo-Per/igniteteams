import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { UsersThree } from 'phosphor-react-native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 80px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
    
  padding: 24px;
  margin-bottom: 12px;
`;

export const Caption = styled.Text`
   color: ${({ theme }) => theme.COLORS.WHITE};
   font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
   font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const UserTreeIcon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
  weight: 'fill',
}))`
  margin-right: 20px;
`;
