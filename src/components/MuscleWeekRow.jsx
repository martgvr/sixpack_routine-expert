import React from 'react'
import { View, Text, Image } from 'react-native'

import { styles } from '../style'

const MuscleWeekRow = ({ text, icon }) => {
  return (
    <View style={styles.MuscleWeekRow}>
        <Image source={{ uri: icon }} style={styles.MuscleWeekRow__image}/>
        <Text style={styles.MuscleWeekRow__text}>{text}</Text>
    </View>
  )
}

export default MuscleWeekRow