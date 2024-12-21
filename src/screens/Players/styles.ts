import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 52px 24px;
`;

export const Form = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  border-radius: 8px;
  
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const FilterHeader = styled.View`
  flex-direction: row;
  margin-bottom: 24px;
  margin-top: 32px;
`;
