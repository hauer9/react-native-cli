import React from 'react'
import { observer } from 'mobx-react-lite'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import { useTheme, useNormalize } from '@/hooks'
import { IChildren } from './common'


const Stack = createStackNavigator()

const Screen = Stack.Screen

export interface INavigator extends IChildren {

}

export const Navigator: React.SFC<INavigator> = observer(({
  children,
}) => {
  const { normalizeSize } = useNormalize()
  const { text, paper, divider, shadowOffset, backgroundColor } = useTheme()

  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: text.info,
        headerBackTitleVisible: false,
        headerTitleAlign: `center`,
        headerTitleStyle: {
          fontSize: normalizeSize(18),
          fontWeight: `bold`,
        },
        headerStyle: {
          backgroundColor: paper,
          borderBottomColor: divider,
          shadowOffset,
        },
        cardStyle: {
          backgroundColor,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      {children}
    </Stack.Navigator>
  )
})

export {
  Screen,
  CardStyleInterpolators,
}