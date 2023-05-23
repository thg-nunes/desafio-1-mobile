import { useState } from 'react'
import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import * as Styled from './styled'

export type InputProps = TextInputProps & {
  onChangeText: (text: string) => void
}

export const Input = ({ onChangeText }: InputProps): JSX.Element => {
  const { colors } = useTheme()
  const [inputInFocus, setInputInFocus] = useState(false)

  return (
    <Styled.Container
      onFocus={() => setInputInFocus(true)}
      onBlur={() => setInputInFocus(false)}
      inputInFocus={inputInFocus}
      onChangeText={onChangeText}
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor={colors.gray[300]}
    />
  )
}
