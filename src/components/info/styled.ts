import styled, { css } from 'styled-components/native'

export type TaskType = 'PRIMARY' | 'SECONDARY'

type TaskDescriptionProps = {
  taskType?: TaskType
}

export const Container = styled.View`
  gap: 8px;

  align-items: center;
  flex-direction: row;
`

export const TaskDescription = styled.Text<TaskDescriptionProps>`
  ${({ theme, taskType }) => css`
    color: ${taskType === 'PRIMARY'
      ? theme.colors.blue[100]
      : theme.colors.perple[100]};
    font-size: ${theme.font_size.MD}px;
    font-family: ${theme.font_familly.bold};
  `}
`

export const TaskQuantity = styled.Text`
  padding: 2px 8px;
  border-radius: 999px;

  ${({ theme }) => css`
    color: ${theme.colors.gray[100]};
    background: ${theme.colors.gray[400]};
  `}
`
