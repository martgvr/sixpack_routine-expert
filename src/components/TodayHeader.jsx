import React from "react"
import { styles } from "../style"
import { View, Text } from "react-native"

const TodayHeader = () => {
	return (
		<View style={styles.todayHeader}>
			<Text style={styles.headerText}>Resumen de hoy</Text>
		</View>
	)
}

export default TodayHeader
