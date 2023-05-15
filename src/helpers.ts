import type { PressableProps } from 'react-native'

type Inline<T, K extends keyof T> = Partial<
  {
    pressableProps: Omit<T, K>
  } & Pick<T, K>
>

export type InlinePressableProps = Inline<PressableProps, 'onPress' | 'onLongPress' | 'onPressIn' | 'onPressOut'>
