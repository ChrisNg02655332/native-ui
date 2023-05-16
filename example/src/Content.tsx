import { Divider, Spacer, Text, useTheme } from 'native-ui'
import React from 'react'
import { View } from 'react-native'

export function Content() {
  const { colors } = useTheme()

  return (
    <View>
      <Text size="sm" color={colors.primary[500]}>
        Content
      </Text>
      <Spacer size={18} />
      <Divider color={colors.danger[500]} width={5} subHeader="subHeader" insetType="middle" inset />
      <Text size="normal">Content</Text>

      <View style={{ flexDirection: 'row' }}>
        <Text color={colors.danger[200]} size="md">
          Content
        </Text>
        <Divider inset color={colors.black} width={2} orientation="vertical" />
        <Text size="lg">Content</Text>
        <Spacer size={40} horizontal />
        <Text size="xs">Content</Text>
      </View>
    </View>
  )
}
