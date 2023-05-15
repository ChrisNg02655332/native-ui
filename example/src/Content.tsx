import { Spacer, Text, useTheme } from 'native-ui'
import React from 'react'
import { StyleSheet, View } from 'react-native'

export function Content() {
  const { colors } = useTheme()

  return (
    <View>
      <Text size="sm" color={colors.primary[500]}>
        Content
      </Text>
      <Spacer size={18} />
      <Text>Space</Text>

      <View style={styles.row}>
        <Text color={colors.danger[200]} size="md">
          Column 1
        </Text>
        <Spacer size={50} horizontal />
        <Text size="lg">Column 2</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row' },
})
