import { IconType as NativeIconType } from './src/types'

declare global {
  type IconType = NativeIconType & {}
}
