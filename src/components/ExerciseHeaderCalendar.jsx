import React from "react"
import { styles } from "../style"
import { View, Text, Image, ScrollView } from "react-native"

const ExerciseHeaderCalendar = () => {
	return (
		<View style={styles.exerciseHeaderCalendar}>
			<Image source={{ uri: "https://www.pngkit.com/png/full/50-508417_blue-arrow-down-png-download-white-arrow-down.png" }} style={styles.headerArrowLeft} />

			<ScrollView horizontal={true} style={styles.exerciseCalendarDaysContainer}>
				<View style={styles.exerciseCalendarDay}>
					<Text style={styles.exerciseCalendarDayName}>LUN</Text>
					<Text style={styles.exerciseCalendarDayNumber}>3</Text>
				</View>
				<View style={styles.exerciseCalendarDay}>
					<Text style={styles.exerciseCalendarDayName}>MAR</Text>
					<Text style={styles.exerciseCalendarDayNumber}>4</Text>
				</View>
				<View style={styles.exerciseCalendarDay}>
					<Text style={styles.exerciseCalendarDayName}>MIE</Text>
					<Text style={styles.exerciseCalendarDayNumberActive}>5</Text>
				</View>
				<View style={styles.exerciseCalendarDay}>
					<Text style={styles.exerciseCalendarDayName}>JUE</Text>
					<Text style={styles.exerciseCalendarDayNumber}>6</Text>
				</View>
				<View style={styles.exerciseCalendarDay}>
					<Text style={styles.exerciseCalendarDayName}>VIE</Text>
					<Text style={styles.exerciseCalendarDayNumber}>7</Text>
				</View>
				<View style={styles.exerciseCalendarDay}>
					<Text style={styles.exerciseCalendarDayName}>SAB</Text>
					<Text style={styles.exerciseCalendarDayNumber}>8</Text>
				</View>
			</ScrollView>

			<Image source={{ uri: "https://www.pngkit.com/png/full/50-508417_blue-arrow-down-png-download-white-arrow-down.png" }} style={styles.headerArrowRight} />
		</View>
	)
}

export default ExerciseHeaderCalendar
