import * as Styled from './styled'

type InfoProps = {
  TaskQuantity?: number
  taskDescription: string
  taskType?: Styled.TaskType
}

export const Info = ({
  TaskQuantity = 0,
  taskType = 'PRIMARY',
  taskDescription = ''
}: InfoProps) => {
  return (
    <Styled.Container>
      <Styled.TaskDescription taskType={taskType}>
        {taskDescription}
      </Styled.TaskDescription>
      <Styled.TaskQuantity>{TaskQuantity}</Styled.TaskQuantity>
    </Styled.Container>
  )
}
