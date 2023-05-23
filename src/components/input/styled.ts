import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

type ContainerProps = {
  inputInFocus: boolean
}

export const Container = styled(TextInput)<ContainerProps>`
  flex: 1;
  height: 54px;

  ${({ theme, inputInFocus }) => css`
    font-size: ${theme.font_size.LG}px;
    color: ${theme.colors.gray[100]};
    background: ${theme.colors.gray[500]};
    border: 1px solid
      ${inputInFocus ? theme.colors.perple[900] : theme.colors.gray[700]};
  `}

  padding: 16px;
  border-radius: 6px;
`
