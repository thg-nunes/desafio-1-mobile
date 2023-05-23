import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

type TaskTextProps = {
  isCompleted?: boolean
}

export const Container = styled.View`
  height: 64px;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  border-radius: 6px;
  margin-bottom: 8px;
  padding-left: 15px;

  background: ${({ theme }) => theme.colors.gray[500]};
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
`

export const AddTaskButton = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`

export const TaskText = styled.Text<TaskTextProps>`
  width: 235px;
  margin-left: 12px;
  color: ${({ theme, isCompleted }) =>
    isCompleted ? theme.colors.gray[300] : theme.colors.gray[100]};
  text-decoration: ${({ isCompleted }) => isCompleted && 'line-through'};

  font-size: ${({ theme }) => theme.font_size.MD}px;
  font-family: ${({ theme }) => theme.font_familly.regular};
`
