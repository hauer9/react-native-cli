import React from 'react'
import { StyleSheet } from 'react-native'
import { observer } from 'mobx-react-lite'
import { goBack } from '@/utils'
import { Icon } from './Icon'
import { IPress } from './common'

export interface IBackIcon extends IPress {
  alwaysWhite?: boolean
  type?: `right` | `down` | `close`  
  size?: number
}

export const BackIcon: React.SFC<IBackIcon> = observer(({
  alwaysWhite,
  type = `right`,
  size,
  onPress,
}) => {
  const iconName = (() => {
    switch (type) {
      case `right`:
        return `ios-arrow-back`
      case `close`:
        return `ios-close-circle-outline`
      case `down`:
        return `ios-arrow-down`
      default:
        return `ios-arrow-back`
    }
  })()

  return (
    <Icon
      name={iconName}
      onPress={onPress || goBack}
      alwaysWhite={alwaysWhite}
      size={size}
    />
  )
})

const styles = StyleSheet.create({
  root: {
  },
})