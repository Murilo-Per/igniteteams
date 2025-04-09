import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';


export const Container = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 56px 24px;
`;
