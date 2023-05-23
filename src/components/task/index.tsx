import { useState } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'

import CheckdIcon from '@assets/checkedIcon.png'
import { Button } from '@components/button'
import UnCheckedIcon from '@assets/unCheckedIcon.png'

import * as Styled from './styled'

export type TaskProps = {
  taskText: string
  removeTask: () => void
  completedTasks: number
  setCompletedTasks: React.Dispatch<React.SetStateAction<number>>
}

export const Task = ({
  taskText = '',
  removeTask,
  completedTasks,
  setCompletedTasks
}: TaskProps): JSX.Element => {
  const [isCompleted, setIsCompleted] = useState(false)

  function handleChangeTaskStatus(): void {
    setIsCompleted(!isCompleted)

    if (isCompleted) {
      return setCompletedTasks(completedTasks - 1)
    } else {
      return setCompletedTasks(completedTasks + 1)
    }
  }

  return (
    <Styled.Container>
      <Styled.AddTaskButton onPress={handleChangeTaskStatus}>
        <Image source={isCompleted ? CheckdIcon : UnCheckedIcon} />
        <Styled.TaskText isCompleted={isCompleted}>{taskText}</Styled.TaskText>
      </Styled.AddTaskButton>
      <Button type="SECONDARY" onPress={removeTask} />
    </Styled.Container>
  )
}
