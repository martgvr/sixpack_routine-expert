import React from "react"
import { styles } from "../style"
import { View, Text, Image } from "react-native"

import ExerciseHeaderCalendar from "./ExerciseHeaderCalendar"

const ExerciseHeader = () => {
	return (
		<View style={styles.exerciseHeader}>
			<View style={styles.exerciseHeaderRow}>
				<Image source={{ uri: "https://icon-library.com/images/calendar-icon-white-png/calendar-icon-white-png-18.jpg" }} style={styles.headerIcon} />
				<Text style={styles.headerText}>Fecha seleccionada</Text>
				<Text style={styles.headerButton}>Hoy</Text>
			</View>

			<View style={styles.exerciseHeaderRow}>
				<ExerciseHeaderCalendar />
			</View>
		</View>
	)
}

export default ExerciseHeader
