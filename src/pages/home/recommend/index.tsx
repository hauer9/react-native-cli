import React from 'react'
import { Navigator, Screen, Icon } from '@/components'
import { Recommend } from './recommend'
import { goToSearch } from '@/utils'


export const RecommendNavigator: React.SFC = () => {
  return (
    <Navigator>
      <Screen
        name='Recommend'
        component={Recommend}
        options={{
          headerTitle: `首页`,
          headerRight: () => <Icon name='ios-search' onPress={goToSearch} />,
        }}
      />
    </Navigator>
  )
}