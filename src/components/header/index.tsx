import { Image } from 'react-native'

import Logo from '@assets/Logo.png'

import * as Styled from './styled'

export type HeaderProps = {}

export const Header = (): JSX.Element => {
  return (
    <Styled.Container>
      <Image source={Logo} />
    </Styled.Container>
  )
}
