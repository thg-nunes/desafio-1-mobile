import { TouchableOpacityProps, Image } from 'react-native'

import AddIcon from '@assets/add.png'
import TrashIcon from '@assets/trash.png'

import * as Styled from './styled'

export type ButtonProps = TouchableOpacityProps & {
  type?: Styled.ButtonTypeStyleProps
}

export const Button = ({
  type = 'PRIMARY',
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <Styled.Container type={type} {...rest}>
      <Image source={type === 'PRIMARY' ? AddIcon : TrashIcon} />
    </Styled.Container>
  )
}
