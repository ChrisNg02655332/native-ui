import { Text, useTheme } from 'react-native-uikit'
import React from 'react'
import { View } from 'react-native'

export function Content() {
  const { colors } = useTheme()

  return (
    <View>
      <Text size="sm" color={colors.primary[500]}>
        Content
      </Text>
    </View>
  )
}
