import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  height: 208px;

  gap: 16px;
  padding: 20px 48px;

  align-items: center;
  justify-content: center;
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
