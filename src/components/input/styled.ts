import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled(TextInput)`
  flex: 1;
  height: 54px;

  ${({ theme }) => css`
    font-size: ${theme.font_size.LG}px;
    color: ${theme.colors.gray[100]};
    background: ${theme.colors.gray[500]};
    border: 1px solid ${theme.colors.gray[700]};
  `}

  padding: 16px;
  border-radius: 6px;
`
