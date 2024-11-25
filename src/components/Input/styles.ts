import styled from 'styled-components/native';
import { TextInput } from 'react-native';

export const Input = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY_300,
  cursorColor: theme.COLORS.GREEN_500
}))`
  flex:1;
  min-height: 56px;
  max-height: 56px;

  max-width: 380px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;

  padding-left: 16px;
`;