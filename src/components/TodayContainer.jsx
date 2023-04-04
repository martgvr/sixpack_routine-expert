import React from "react"
import { styles } from "../style"
import { SafeAreaView, StatusBar } from "react-native"

import TodayHeader from "./TodayHeader"
import TodayMain from "./TodayMain"

const TodayContainer = () => {
	return (
		<SafeAreaView style={styles.todayContainer}>
			<StatusBar />
			<TodayHeader />
			<TodayMain />
		</SafeAreaView>
	)
}

export default TodayContainer
