import React from 'react'
import { COLORS } from '../global/colors'
import { StyleSheet, SafeAreaView } from 'react-native'

import TodayResumeMain from '../components/TodayResumeMain'
import TodayResumeHeader from '../components/TodayResumeHeader'

const TodayResume = () => {
  return (
		<SafeAreaView style={styles.container}>
      <TodayResumeHeader />
      <TodayResumeMain />
		</SafeAreaView>
  )
}

export default TodayResume

const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.secondary,
      height: '100%',
    },
})