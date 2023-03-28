import React from 'react'
import { View, Text } from 'react-native'

import { styles } from '../style'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>MES</Text>
    </View>
  )
}

export default Header