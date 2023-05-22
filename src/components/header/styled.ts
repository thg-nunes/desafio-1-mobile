import { SafeAreaView } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  width: 100%;
  height: 173px;

  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.gray[700]};
`
