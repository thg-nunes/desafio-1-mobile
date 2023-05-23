import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  height: 208px;

  gap: 16px;

  align-items: center;
  justify-content: center;

  border-top-width: 1px;
  border-top-color: #333333;
`

export const MessageContainer = styled.View`
  align-items: center;
`

export const RegularMessage = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[300]};

    font-size: ${theme.font_size.MD}px;
    font-family: ${theme.font_familly.regular};
  `}
`

export const StrongMessage = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[300]};

    font-size: ${theme.font_size.MD}px;
    font-family: ${theme.font_familly.bold};
  `}
`
