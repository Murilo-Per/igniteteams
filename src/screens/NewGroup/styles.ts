import { SafeAreaView } from 'react-native-safe-area-context';

import { UsersThree } from 'phosphor-react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex:1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 52px 24px;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  padding-bottom: 148px;
`;

export const ImageIcon = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.GREEN_700,

}))
  `
  align-self: center;
`;
