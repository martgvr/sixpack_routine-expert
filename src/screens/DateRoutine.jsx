import React from 'react'
import { COLORS } from '../global/colors'
import { StyleSheet, SafeAreaView } from 'react-native'

import DateRoutineHeader from '../components/DateRoutineHeader'
import DateRoutineCardsContainer from '../components/DateRoutineCardsContainer'

const DateRoutine = () => {
  return (
    <SafeAreaView style={styles.container}>
        <DateRoutineHeader />
        <DateRoutineCardsContainer />
    </SafeAreaView>
  )
}

export default DateRoutine

const styles = StyleSheet.create({
  container: {
      backgroundColor: COLORS.secondary,
      height: '100%'
  },
})