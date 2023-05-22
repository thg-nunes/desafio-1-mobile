import { useState } from 'react'
import { Image, Touchable, TouchableOpacity } from 'react-native'

import CheckdIcon from '@assets/checkedIcon.png'
import { Button } from '@components/button'
import UnCheckedIcon from '@assets/unCheckedIcon.png'

import * as Styled from './styled'

export type TaskProps = {
  taskText: string
  removeTask: () => void
}

export const Task = ({ taskText = '', removeTask }: TaskProps): JSX.Element => {
  const [isCompleted, setIsCompleted] = useState(false)

  return (
    <Styled.Container>
      <TouchableOpacity onPress={() => setIsCompleted(!isCompleted)}>
        <Image source={isCompleted ? CheckdIcon : UnCheckedIcon} />
      </TouchableOpacity>
      <Styled.TaskText isCompleted={isCompleted}>{taskText}</Styled.TaskText>
      <Button type="SECONDARY" onPress={removeTask} />
    </Styled.Container>
  )
}
