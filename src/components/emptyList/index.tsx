import { Image } from 'react-native'
import * as Styled from './styled'

import ListIcon from '@assets/Clipboard.png'

export const EmptyList = () => {
  return (
    <Styled.Container>
      <Image source={ListIcon} />
      <Styled.MessageContainer>
        <Styled.StrongMessage>
          Você ainda não tem tarefas cadastradas
        </Styled.StrongMessage>
        <Styled.RegularMessage>
          Crie tarefas e organize seus itens a fazer
        </Styled.RegularMessage>
      </Styled.MessageContainer>
    </Styled.Container>
  )
}
