import React from "react"
import { View, Text } from "react-native"

import { styles } from "../style"

const TodayHeader = () => {
	return (
		<View style={styles.resumeHeader}>
			<Text style={styles.headerText}>Resumen de hoy</Text>
		</View>
	)
}

export default TodayHeader
