import React from 'react'
import { ThemeProvider, DefaultTheme, Theme, blue } from 'react-native-uikit'
import { SafeAreaView, View } from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import { Content } from './Content'

const customeTheme: Theme = {
  ...DefaultTheme,
  // fontSize: {
  //   sm: 12,
  // },
  fontFamily: {
    regular: 'Manrope',
    bold: 'Manrope-Bold',
  },

  colors: {
    ...DefaultTheme.colors,
    primary: {
      ...blue,
      500: '#ff4438',
    },
  },
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'Manrope': require('../assets/Manrope.ttf'),
    'Manrope-Bold': require('../assets/Manrope-Bold.ttf'),
  })

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <View onLayout={onLayoutRootView}>
      <ThemeProvider theme={customeTheme}>
        <SafeAreaView>
          <Content />
        </SafeAreaView>
      </ThemeProvider>
    </View>
  )
}
