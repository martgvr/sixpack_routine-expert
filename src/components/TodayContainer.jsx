import React from "react"
import { SafeAreaView, Text, StatusBar, View } from "react-native"

import { styles } from "../style"

import TodayHeader from "./TodayHeader"

const TodayContainer = () => {
	return (
		<SafeAreaView style={styles.resumeContainer}>
			<StatusBar />
            <TodayHeader />
			<Text style={styles.resumeTitle}>General</Text>
		</SafeAreaView>
	)
}

export default TodayContainer
