import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type ContainerProps = {
  type?: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 52px;
  height: 52px;

  padding: 18px;
  margin-left: 4px;
  border-radius: 6px;

  align-items: center;
  justify-content: center;

  background: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.colors.blue[900] : 'transparent'};
`
