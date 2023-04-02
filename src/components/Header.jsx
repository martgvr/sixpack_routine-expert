import React from 'react'
import { styles } from '../style'
import { View, Text, Image } from 'react-native'

import HeaderCalendar from './HeaderCalendar'

const Header = () => {
  return (
    <View style={styles.header}>

      <View style={styles.headerRow}>
        <Image source={{ uri: 'https://icon-library.com/images/calendar-icon-white-png/calendar-icon-white-png-18.jpg' }} style={styles.headerIcon}/>
        <Text style={styles.headerText}>Fecha seleccionada</Text>
        <Text style={styles.headerButton}>Hoy</Text>
      </View>

      <View style={styles.headerRow}>
        <HeaderCalendar/>  
      </View>

    </View>
  )
}

export default Header