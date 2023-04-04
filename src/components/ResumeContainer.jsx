import React from "react"
import { SafeAreaView, Text, StatusBar, View } from "react-native"

import { styles } from "../style"

const ResumeContainer = () => {
	return (
		<SafeAreaView style={styles.resumeContainer}>
			<StatusBar />
			<Text>ResumeContainer</Text>
		</SafeAreaView>
	)
}

export default ResumeContainer
